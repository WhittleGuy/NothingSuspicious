import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
  </Switch>
);

export default Main;
