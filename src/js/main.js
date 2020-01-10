import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Locations from "./pages/locations";
import Directory from "./pages/directory";
import Scenarios from "./pages/scenarios";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/locations" component={Locations} />
    <Route path="/directory" component={Directory} />
    <Route path="/scenarios" component={Scenarios} />
  </Switch>
);

export default Main;
