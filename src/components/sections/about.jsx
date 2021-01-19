import React from "react"
import styled from "styled-components"
import theme from "../../styles/theme"
import Section from "../../styles/Section"
import mixins from "../../styles/mixins"
const { fontSizes, fonts, colors } = theme

const StyledContainer = styled(Section)`
  color: ${colors.cream_text};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 100px;
  a {
    ${mixins.inlineLink};
  }
`

const StyledTitle = styled.h4`
  margin: 0px 0px 20px;
  font-size: 60px;
  @media (max-width: 63em) {
    font-size: 50px;
  }
  @media (max-width: 48em) {
    font-size: 40px;
  }
`

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`

const StyledDiv = styled.div`
  font-family: ${fonts.Calibre};
`

const About = () => {

  return (
    <StyledContainer id="about">
      <StyledTitle>Powered by Zomato</StyledTitle>
      <StyledDiv dangerouslySetInnerHTML={{ __html: "Placeholder about how I was built" }} />
    </StyledContainer>
  )
}

export default About
