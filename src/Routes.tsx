import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

export default Routes;
