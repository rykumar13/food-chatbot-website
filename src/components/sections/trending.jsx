import React from "react"
import styled from "styled-components"
import theme from "../../styles/theme"
import Section from "../../styles/Section"
import mixins from "../../styles/mixins"

const { colors, fonts, fontSizes } = theme

const StyledContainer = styled(Section)`
  padding: 60px 0;
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-center;
  min-height: 100vh;
  @media (max-width: 48em) {
    padding-top: 00px;
  }
  div {
    width: 100%;
  }
`
const StyledTitle = styled.h2`
  color: ${colors.cream_text};
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
  color: ${colors.cream_text};
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

const Trending = () => {
  
    return (
      <StyledContainer id="trending">
        <StyledTitle>Trending in Auckland</StyledTitle>
      </StyledContainer>
    )
  }
  
  export default Trending