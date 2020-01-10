import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Locations from "./pages/locations";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/locations" component={Locations} />
  </Switch>
);

export default Main;
