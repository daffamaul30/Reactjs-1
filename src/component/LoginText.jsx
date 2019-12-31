import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginTeks extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {
        return(
            <div className="container">
                <div className="line">
                    <div id="first">WELCOME TO</div>
                    <div id="first2">MY WEBSITE</div>
                    <div id="second">JUST ENJOY ANYTHING INSIDE THIS WEBSITE</div>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginTeks);

