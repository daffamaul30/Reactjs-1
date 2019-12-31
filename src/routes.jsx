import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import First from "./FirstPage";
import Login from "./component/Login";
import Home from "./HomePage";

const routes = () =>{
    return(
        <Router>
            <Route exact path="/" component={First} />
            <Route path="/login" component={Login}/>
            <Route path="/dashboard" component={Home}/>
        </Router>
    )
}

export default routes;