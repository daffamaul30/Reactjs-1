import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import LoginBox from "./component/Login";
import RegisterBox from "./component/Register";
import "./FirstPage.css";
import Text from "./component/LoginText"

class FirstPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false
        };
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isRegisterOpen: false});
    }
    
    showRegisterBox() {
        this.setState({isRegisterOpen: true, isLoginOpen: false});
    }

    render = () => {
        return(
            <Fragment>
                <div className="row">
                    <div className="col-8">
                        <Text/>
                    </div>
                    <div className="col root-container">
                        <div className="box-controller">
                            <div
                                className={"controller " + (this.state.isLoginOpen? "selected-controller": "")}
                                onClick={this
                                .showLoginBox.bind(this)}>
                                Login
                            </div>
                            <div
                                className={"controller " + (this.state.isRegisterOpen? "selected-controller": "")}
                                onClick={this
                                .showRegisterBox.bind(this)}>
                                Register
                            </div>
                        </div>
                        <div className="box-container">
                            {this.state.isLoginOpen && <LoginBox/>}
                            {this.state.isRegisterOpen && <RegisterBox/>}
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        )
    }
    
}
export default withRouter(FirstPage);