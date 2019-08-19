import React from "react";
import styled from "styled-components";

import Home from "../../sections/home";
import Skills from "../../sections/skills";
import Portfolio from "../../sections/portfolio";
import About from "../../sections/about";
import Contact from "../../sections/contact";

const StyledMainView = styled.div``;

const HomePosition = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
`;

const DivWrap = styled.div`
  width: 100%;
  margin-top: 100vh;
  padding-bottom: 20rem;
  background: ${({ theme }) => theme.primaryColor};
  transition: background-color 0.6s;
`;

const DivWrapSecond = styled.div`
  padding: 0rem 2rem;
  background: ${({ theme }) => theme.textColor};
`;

const Div = styled.div`
  width: 110rem;
  max-width: 100%;
  min-height: 100vh;
  margin: auto;
`;

const MainView: React.FC = () => (
  <StyledMainView>
    <HomePosition id="home" />
    <Home />
    <DivWrap>
      <DivWrapSecond>
        <Div>
          <Skills id="skills" />
          <Portfolio id="portfolio" />
          <About id="about" />
          <Contact id="contact" />
        </Div>
      </DivWrapSecond>
    </DivWrap>
  </StyledMainView>
);

export default MainView;
