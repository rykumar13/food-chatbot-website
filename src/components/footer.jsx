import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import mixins from '../styles/mixins'

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  text-align: center;
  height: auto;
  min-height: 70px;
`;

const StyledSocial = styled.div`
  color: ${colors.cream_text};
  width: 100%;
  max-width: 270px;
  margin: 0 auto 10px;
  display: none;
`;

const StyledSocialList = styled.ul`
  ${mixins.flexBetween};
  padding: 0;
  margin: 0;
  list-style: none;
`;

const StyledSocialLink = styled.a`
  padding: 10px;
  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledMetadata = styled.div`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xs};
  line-height: 1;
`;

const StyledGitHubLink = styled.a`
  color: ${colors.cream_text};
  padding: 10px;
`;

 const Footer = () => {
  return (
    <StyledContainer>
      <StyledMetadata tabindex="-1">
        <StyledGitHubLink
          href="https://github.com/rykumar13/portfolio-website"
          target="_blank"
          rel="nofollow noopener noreferrer">
          <div>Designed &amp; Built by Rajiv Kumar</div>
        </StyledGitHubLink>
      </StyledMetadata>
    </StyledContainer>
  );
};

export default Footer;
