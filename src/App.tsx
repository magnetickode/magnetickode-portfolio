import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <Router data-test="AppComponent">
      <div>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
