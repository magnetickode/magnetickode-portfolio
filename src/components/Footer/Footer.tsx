import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faMedium,
  faTwitter,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {
  siteGitRepo as siteGitRepoLink,
  github as githubLink,
  twitter as twitterLink,
  facebook as facebookLink,
  instagram as instagramLink,
  medium as mediumLink
} from "../../data/links.json";

const StyledFooter = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialMediaBar = styled.div`
  width: 55rem;
  height: 5rem;
  max-width: 100%;
  margin-bottom: 3.5rem;
  background: ${({ theme }) => theme.textColor};
  border-radius: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.primaryColor};
  transition: 0.4s;
  cursor: pointer;

  :hover {
    transform: scale(1.25);
  }

  @media (min-width: 250px) {
    font-size: 2.4rem;
  }

  @media (min-width: 350px) {
    font-size: 2.8rem;
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

const Footer: React.FC = () => (
  <StyledFooter data-test="FooterComponent">
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
      <A href={instagramLink} target="_blank">
        <StyledIcon icon={faInstagram} />
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
    <P>magnetickode @2019</P>
  </StyledFooter>
);

export default Footer;
