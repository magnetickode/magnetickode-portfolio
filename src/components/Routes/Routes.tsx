import React from "react";
import { Switch, Route } from "react-router-dom";

import MainView from "../MainView";

const Routes: React.FC = () => (
  <Switch data-test="RoutesComponent">
    <Route exact path="/" component={MainView} />
  </Switch>
);

export default Routes;
