import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../pages/home";

const Routes: React.FC = () => (
  <Switch data-test="RoutesComponent">
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
