import React from "react";
import styled, { keyframes } from "styled-components";

import { Props, StyledHomeProps } from "./types";

const spinAnim = keyframes`
  0% {
    transform: rotateY(180deg);
  }
  33% {
    transform: rotateY(0deg);
  }

  100% {
    transform: rotateY(0deg);
  }
`;

const StyledHome = styled.div.attrs(({ opacity }: StyledHomeProps) => ({
  opacity
}))`
  position: fixed;
  z-index: -1;
  display: flex;
  opacity: ${({ opacity }) => opacity};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 0 2rem;
  box-sizing: border-box;
  transform: translateY(-8rem);
`;

const P = styled.p`
  position: relative;
  font-family: "Righteous", cursive;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  line-height: 2.7rem;
  max-width: 70rem;
  margin-top: 5rem;

  @media (min-height: 800px) {
    ::before {
      content: "< />";
      position: absolute;
      top: -5rem;
      left: 1rem;
    }

    ::after {
      content: "< />";
      position: absolute;
      bottom: -5rem;
      right: 1rem;
    }

    ::before,
    ::after {
      font-size: 3.6rem;
      animation: ${spinAnim} 3s linear;
      animation-direction: alternate-reverse;
      animation-iteration-count: infinite;
      animation-fill-mode: backwards;
    }
  }

  @media (min-width: 720px) {
    font-size: 2.2rem;
    line-height: 3rem;
    transform: translateY(4rem);
  }
`;

const Home: React.FC<Props> = ({ opacity }) => (
  <StyledHome opacity={opacity}>
    <P>
      Hi, I am Ashfaque Ahsan. I also go by the alias magnetickode. I am a Software
      Engineer with experinece building apps for multiple platforms including Web, Mobile
      and Desktop. I have a passion for turning ideas into code while following
      sophisticated software design, principles and conventions.
    </P>
  </StyledHome>
);

export default Home;
