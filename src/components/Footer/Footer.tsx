import React from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faTwitter,
  faFacebook,
  faQuora
} from "@fortawesome/free-brands-svg-icons";

import {
  siteGitRepo as siteGitRepoLink,
  github as githubLink,
  twitter as twitterLink,
  facebook as facebookLink,
  quora as quoraLink,
  medium as mediumLink
} from "../../data/links.json";
import { Props, StyledFooterProps } from "./types";

const enterAnim = keyframes`
  from {
    opacity: 0;
    transform: translateY(10rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const StyledFooter = styled.div<StyledFooterProps>`
  position: ${({ footerPosition }) => footerPosition};
  bottom: 2.5rem;
  left: 0;
  width: 100%;
  height: 17rem;
  animation: ${({ footerState, footerPosition }) =>
      footerPosition === "fixed" && footerState === "enterAnim" && enterAnim}
    0.5s;

  ${({ footerState, footerPosition }) =>
    footerPosition === "fixed" &&
    footerState === "leaveAnim" &&
    `
    opacity: 0;
    transform: translateY(10rem);
    transition: 0.5s;
  `}

  & > div {
    width: 110rem;
    max-width: 100%;
    margin: auto;
    margin-top: auto;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
  }

  @media (min-width: 720px) {
    bottom: 0;
  }
`;

const SocialMediaBar = styled.div`
  width: 55rem;
  height: 5rem;
  max-width: 100%;
  margin-bottom: 3.5rem;
  background: ${({ theme }) => theme.textColor};
  border-radius: 3rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: 0.2s;

  :hover {
    transform: scale(1.01);
    box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.3);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primaryColor};
  transition: 0.2s;

  :hover {
    transform: scale(1.25);
  }

  @media (min-width: 250px) {
    font-size: 2.4rem;
  }

  @media (min-width: 350px) {
    font-size: 2.8rem;
  }

  @media (min-width: 720px) {
    cursor: pointer;
  }
`;

const P = styled.p`
  margin-top: -0.3rem;
  font-size: 1.4rem;
  text-align: center;
`;

const A = styled.a`
  color: ${({ theme }) => theme.textColor};
`;

const Footer: React.FC<Props> = ({ footerState, footerPosition }) =>
  !(footerPosition === "fixed" && footerState === "normal") ? (
    <StyledFooter
      data-test="FooterComponent"
      footerState={footerState}
      footerPosition={footerPosition}
    >
      <div>
        <SocialMediaBar>
          <A href={githubLink} target="_blank">
            <StyledIcon icon={faGithub} />
          </A>
          <A href={twitterLink} target="_blank">
            <StyledIcon icon={faTwitter} />
          </A>
          <A href={facebookLink} target="_blank">
            <StyledIcon icon={faFacebook} />
          </A>
          <A href={quoraLink} target="_blank">
            <StyledIcon icon={faQuora} />
          </A>
          <A href={mediumLink} target="_blank">
            <StyledIcon icon={faMedium} />
          </A>
        </SocialMediaBar>
        <P>
          This website was built with React, TypeScript and various other technologies. To
          check out the code, visit this{" "}
          <A href={siteGitRepoLink} target="_blank">
            GitHub repo
          </A>
          .
        </P>
        <P>&copy; magnetickode {new Date().getFullYear()}</P>
      </div>
    </StyledFooter>
  ) : null;

export default Footer;
