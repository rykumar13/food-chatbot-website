import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Section from "../../styles/Section";
import mixins from "../../styles/mixins";

import { Link } from "react-scroll";

const { colors, fontSizes, fonts } = theme;

const StyledContainer = styled(Section)`
  max-width: 100%;
  padding: 60px 0px;
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-center;
  min-height: 100vh;
  height: 250px;
  @media (max-width: 48em) {
    padding-top: 00px;
  // }
  // div {
  //   width: 100%;
  // }
`;
const StyledTitle = styled.h2`
  color: ${colors.white};
  font-family: 'Titillium Web', sans-serif;
  // font-weight: 700;
  font-size: 80px;
  font-style: italic;
  line-height: 1.1;
  margin: 0;
  @media (max-width: 63em) {
    font-size: 70px;
  }
  @media (max-width: 48em) {
    font-size: 60px;
  }
  @media (max-width: 30em) {
    font-size: 50px;
  }
  @media (max-width: 24em) {
    font-size: 40px;
  }
`;

const StyledSubtitle = styled.h3`
  color: ${colors.white};
  font-size: 30px;
  font-weight: normal;
  font-style: italic;
  line-height: 1.1;
  @media (max-width: 63em) {
    font-size: 25px;
  }
  @media (max-width: 48em) {
    font-size: 20px;
  }
  @media (max-width: 30em) {
    font-size: 15px;
  }
  @media (max-width: 24em) {
    font-size: 10px;
  }
`;

const StyledGetStarted = styled.a`
  ${mixins.smallButton};
  margin-top: 20px;
`;

const StyledGetStartedContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Landing = () => {
  return (
    <StyledContainer id="landing">
      <StyledTitle>Meet FoodBot</StyledTitle>
      <StyledSubtitle>
        A chatbot to help you discover where to eat in Auckland.
      </StyledSubtitle>
      <StyledSubtitle>Powered by Zomato.</StyledSubtitle>
      <StyledGetStartedContainer>
        <Link
          activeClass="active"
          to="Chatbot"
          spy={true}
          smooth={true}
          duration={700}
        >
          <StyledGetStarted href={``}>Get Started</StyledGetStarted>
        </Link>
      </StyledGetStartedContainer>
    </StyledContainer>
  );
};

export default Landing;
