import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import login from "./FirstPage";

const routes = () =>{
    return(
        <Router>
            <div>
                <Route exact path="/" component={login} />
            </div>
        </Router>
    )
}

export default routes;