import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import Context, { initialContextValue } from "./context";
import Navbar from "./components/Navbar";

const StyledApp = styled.div`
  width: 110rem;
  max-width: 100%;
  margin: auto;
  padding: 3.5rem 2rem 0 2rem;
`;

const App: React.FC = () => {
  const [contextState, setContextState] = useState(initialContextValue);

  const onResize = useCallback(() => {
    if (window.innerWidth >= 720) {
      setContextState(prevContextState => {
        if (!prevContextState.isDesktop) {
          return {
            ...prevContextState,
            isDesktop: true
          };
        } else {
          return prevContextState;
        }
      });
    }

    if (window.innerWidth < 720) {
      setContextState(prevContextState => {
        if (prevContextState.isDesktop) {
          return {
            ...prevContextState,
            isDesktop: false
          };
        } else {
          return prevContextState;
        }
      });
    }
  }, []);

  // Listen on resize to determine if screen is mobile or desktop
  useEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [onResize]);

  return (
    <Context.Provider value={contextState} data-test="AppComponent">
      <Router>
        <StyledApp>
          <Navbar />
          <Routes />
        </StyledApp>
      </Router>
    </Context.Provider>
  );
};

export default App;
