import React, {Component} from "react";
import classes from "../css/style.module.css";
import {questions1} from "../propertyFiles/questions";
import {Link} from "react-router-dom";
import {Container} from "react-bootstrap";

// Test1 page
// Data being imported from property files

class Test1 extends Component {
    constructor(props) {
        super(props);
        this.handleOptionChange = this.handleOptionChange.bind(this)
    }

    // Initial state values

    state = {
        counter: 0,
        show: true,
        isVisible: true,
    }

    // Handling the option change once a radio button is clicked and passing the event as a parameter to save in the selected option

    handleOptionChange = (changeEvent) => {
        this.setState({
            selectedOption: changeEvent.target.value
        });

        // If a value is undefined or null then the option to hit next will be unavailable

        if (changeEvent.target.value !== 'undefined' || changeEvent.target.value !== 'null') {
            this.setState({show: false})
        }

        // Once the user is on the last question the next button disappears and a submit button appears

        if (this.state.counter >= questions1.length - 1) {
            this.setState({show: true})
            this.setState({isVisible: false})
        }
    }

    nextHandler = () => {
        // Selected option is set back to null once the user clicks on next
        this.setState({
            selectedOption: ''
        });
        // Incrementing the counter variable to move to the next question in the array
        this.setState({counter: this.state.counter + 1})
        this.setState({show: true})
    }

    render() {
        return (
            <div className={classes.background}>
                <Container className={classes.container}>
                    <div className={classes.testPage}>
                        <button className={classes.btnNext} id="nextBtn" onClick={this.nextHandler}
                                disabled={this.state.show}
                                hidden={!this.state.isVisible}>Next
                        </button>
                        <Link to='/submit'>
                            <button id="submit"
                                    disabled={!this.state.show}
                                    hidden={this.state.isVisible}
                                    className={classes.btnSubmit}>Submit</button>
                        </Link>
                    </div>
                    <div className={classes.questions}>
                        <div className="mainQuestion">
                            <h2><em>Solve the question: </em></h2>
                            <h3><strong>{questions1[this.state.counter].id}.</strong> {questions1[this.state.counter].q}</h3>
                        </div>
                        <div className={classes.options}>
                            <label className="option">SELECT ONLY ONE</label>
                            <div className={classes.radio}>
                                <h3>
                                    <label className={classes.opt}>{questions1[this.state.counter].a}
                                        <input  type="radio" value="option1"
                                               className={classes.btnRadio}
                                               style={{marginRight: 10 + 'px'}}
                                               checked={this.state.selectedOption === 'option1'}
                                               onChange={(changeEvent) => this.handleOptionChange(changeEvent)}/>
                                    </label>
                                </h3>
                            </div>
                            <div className={classes.radio}>
                                <h3>
                                    <label className={classes.opt}>{questions1[this.state.counter].b}
                                        <input type="radio" value="option2"
                                               className={classes.btnRadio}
                                               style={{marginRight: 10 + 'px'}}
                                               checked={this.state.selectedOption === 'option2'}
                                               onChange={(changeEvent) => this.handleOptionChange(changeEvent)}/>
                                    </label>
                                </h3>
                            </div>
                            <div className={classes.radio}>
                                <h3>
                                    <label className={classes.opt}>{questions1[this.state.counter].c}
                                        <input type="radio" value="option3"
                                               className={classes.btnRadio}
                                               style={{marginRight: 10 + 'px'}}
                                               checked={this.state.selectedOption === 'option3'}
                                               onChange={(changeEvent) => this.handleOptionChange(changeEvent)}/>
                                    </label>
                                </h3>
                            </div>
                            <div className={classes.radio}>
                                <h3>
                                    <label className={classes.opt}>{questions1[this.state.counter].d}
                                        <input type="radio" value="option4"
                                               className={classes.btnRadio}
                                               style={{marginRight: 10 + 'px'}}
                                               checked={this.state.selectedOption === 'option4'}
                                               onChange={(changeEvent) => this.handleOptionChange(changeEvent)}/>
                                    </label>
                                </h3>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Test1;