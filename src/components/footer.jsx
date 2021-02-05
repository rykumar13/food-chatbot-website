import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import mixins from "../styles/mixins";

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  background: black;
  flex-direction: column;
  padding: 0px;
  text-align: center;
  height: auto;
  min-height: 0px;
`;

const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;

const StyledGitHubLink = styled.a`
  color: ${colors.cream_text};
  text-decoration: none;
  padding: 10px;
`;

const Footer = () => {
  return (
    <StyledContainer>
      <StyledMetadata tabindex="-1">
        <StyledGitHubLink
          href="https://github.com/rykumar13/portfolio-website"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <div>Designed &amp; Built by Rajiv Kumar</div>
        </StyledGitHubLink>
      </StyledMetadata>
    </StyledContainer>
  );
};

export default Footer;
