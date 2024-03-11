import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SpotDetails from "./pages/SpotDetails";
import NewSpot from "./pages/NewSpot";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/spots/:id" exact component={SpotDetails} />
      <Route path="/new-spot"  exact component={NewSpot} />
    </Switch>
  );
};

export default Routes;
