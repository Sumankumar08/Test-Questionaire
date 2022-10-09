import React from "react";
import classes from "../css/style.module.css";
import {Container} from "react-bootstrap";
import {Link} from "react-router-dom";

// Submit page, user can choose to start the test once again or go for the next test.

function Submit() {
    return (
        <div className={classes.background}>
            <Container className={classes.container}>
                <div className={classes.submitPage}>
                    <h1>
                        Thank you for completing the test!
                    </h1><br/>
                    <Link to='/'>
                        <button className={classes.btnRetake}>Retake the test!</button>
                    </Link>
                </div>
            </Container>
        </div>
    );
}

export default Submit;