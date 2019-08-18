import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnim = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  33% {
    transform: rotateY(0deg);
  }

  /* 66%% {
    transform: rotateY(180deg);
  } */

  100% {
    transform: rotateY(0deg);
  }
`;

const StyledHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const P = styled.p`
  position: relative;
  font-style: italic;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  line-height: 2.7rem;
  max-width: 70rem;

  ::before {
    content: "< />";
    position: absolute;
    top: -5rem;
    left: 1rem;
    display: block;
    font-size: 3.6rem;
  }

  ::after {
    content: "< />";
    position: absolute;
    bottom: -5rem;
    right: 1rem;
    font-size: 3.6rem;
  }

  ::before,
  ::after {
    animation: ${spinAnim} 3s linear;
    animation-direction: alternate-reverse;
    animation-iteration-count: infinite;
    animation-fill-mode: backwards;
  }

  @media (min-width: 720px) {
    font-size: 2.1rem;
    line-height: 3rem;
  }
`;

const Home: React.FC = () => (
  <StyledHome>
    <P>
      Hi I am Ashfaque Ahsan. I also go by the alias magnetickode. I am a Software
      Engineer with experinece building apps for multiple platforms including Web, Mobile
      and Desktop. My expertise lies on JavaScript tech stacks.
    </P>
  </StyledHome>
);

export default Home;
