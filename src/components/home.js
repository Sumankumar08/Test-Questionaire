import React, {Component} from "react";
import { properties } from '../propertyFiles/homePage.js';
import classes from '../css/style.module.css';
import {Dropdown, DropdownButton} from "react-bootstrap";

class Home extends Component {

    //All data is imported from a properties file

    render() {
        return (
            <div className={classes.body}>
                <div className={classes.Container}>
                    <h1>Welcome!</h1>
                        <h3>{properties.selecttestLabel}</h3><br/>
                        <DropdownButton id="dropdown-basic-button" variant="success" size="lg" title="Select..."
                                        className={classes.dropdown}>
                            <Dropdown.Item value="test1" className={classes.test}
                                           href="/test1">{properties.test1}</Dropdown.Item><br/>
                            <Dropdown.Item value="test2" className={classes.test}
                                           href="/test2">{properties.test2}</Dropdown.Item><br/>
                        </DropdownButton><br/>
                </div>
            </div>
        );
    }
}

export default Home