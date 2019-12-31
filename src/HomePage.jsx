import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./component/Home/Navbar";

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render = () => {
        return(
            <div>
                <Navbar/>
            </div>
        )
    }
    
}
export default withRouter(HomePage);