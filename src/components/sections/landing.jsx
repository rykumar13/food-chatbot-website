import React from "react"
import styled from "styled-components"
import theme from "../../styles/theme"
import Section from "../../styles/Section"
import mixins from "../../styles/mixins"
import bg from "../../images/landing.jpg"

const { colors } = theme

const StyledContainer = styled(Section)`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  max-width:100%;
  // max-height:100%;
  object-fit: fill;
  padding: 60px 0px;
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-center;
  min-height: 90vh;
  height: 250px;
  @media (max-width: 48em) {
    padding-top: 00px;
  }
  div {
    width: 100%;
  }
`
const StyledTitle = styled.h2`
  color: ${colors.white};
  font-size: 80px;
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
`

const StyledSubtitle = styled.h3`
  color: ${colors.white};
  font-size: 30px;
  font-weight: normal;
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
`

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 20px;
`

const Landing = () => {
  
    return (
      <StyledContainer id="landing">
        <StyledTitle>Meet FoodBot</StyledTitle>
        <StyledSubtitle>A chatbot to help you discover where to eat in Auckland.</StyledSubtitle>
        <StyledSubtitle>Powered by Zomato</StyledSubtitle>
        <div>
          <StyledEmailLink href={`mailto:rykumar13@gmail.com`}>Get Started</StyledEmailLink>
        </div>
      </StyledContainer>
    )
  }
  
  export default Landing