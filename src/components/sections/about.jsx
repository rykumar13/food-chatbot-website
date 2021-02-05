import React from "react"
import styled from "styled-components"
import Section from "../../styles/Section"
import mixins from "../../styles/mixins"
import theme from "../../styles/theme";
const { colors } = theme;

const StyledContainer = styled(Section)`
  background-color: ${colors.navy};
  max-width: 100%;
  ${mixins.flexCenter};
  flex-direction: column;
  object-fit: fill;
  min-height: 100vh;
  text-align: center;

  a {
    ${mixins.inlineLink};
  }
`

const StyledTitle = styled.h4`
  font-size: 50px;
  line-height: 1.1;
  margin: 0;
  font-style: italic;
  @media (max-width: 63em) {
    font-size: 50px;
  }
  @media (max-width: 48em) {
    font-size: 40px;
  }
`

const StyledSourceCode = styled.a`
  ${mixins.smallButton};
  margin-top: 20px;
`;

const StyledTextBlob = styled.div`
color: ${colors.cream_text};
@media (max-width: 425px) {
  font-size: 14px;
}
@media (max-width: 350px) {
  font-size: 12px;
}
`;

const About = () => {

  return (
    <StyledContainer id="about">
      <StyledTitle>About FoodBot</StyledTitle>
      <div>
          <StyledTextBlob>Made using, react, React-chatbot-kit library, Zomato api</StyledTextBlob>
          <StyledSourceCode href={`https://github.com/rykumar13/react-food-chatbot-website`}>
          Source
        </StyledSourceCode>
      </div>
    </StyledContainer>
  )
}

export default About
