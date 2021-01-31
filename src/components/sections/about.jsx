import React from "react"
import styled from "styled-components"
import theme from "../../styles/theme"
import Section from "../../styles/Section"
import mixins from "../../styles/mixins"
import bg from "../../images/landing4.jpg";
const { fontSizes, fonts, colors } = theme

const StyledContainer = styled(Section)`
  // background-image: url(${bg});
  // background-position: center;
  // background-size: cover;
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

const StyledDiv = styled.div`
  font-family: ${fonts.Calibre};
`
const StyledSourceCode = styled.a`
  ${mixins.smallButton};
  margin-top: 20px;
`;


const About = () => {

  return (
    <StyledContainer id="about">
      <StyledTitle>About FoodBot</StyledTitle>
      <div>
          <div>Made using, react, React-chatbot-kit library, Zomato api</div>
          <StyledSourceCode href={`https://github.com/rykumar13/react-food-chatbot-website`}>
          Source
        </StyledSourceCode>
      </div>
    </StyledContainer>
  )
}

export default About
