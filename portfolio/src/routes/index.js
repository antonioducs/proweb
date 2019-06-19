    
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../pages/Main";
import EditHome from "../pages/EditHome";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/edithome" component={EditHome} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;