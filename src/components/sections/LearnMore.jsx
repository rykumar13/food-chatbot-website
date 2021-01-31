import React from "react"
import styled from "styled-components"
import theme from "../../styles/theme"
import Section from "../../styles/Section"
import mixins from "../../styles/mixins"
import bg from "../../images/landing4.jpg";

import { Link } from "react-scroll";
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
  // text-align: center;

  a {
    ${mixins.inlineLink};
  }
`

const StyledTitle = styled.h4`
  font-size: 80px;
  font-style: italic;
  line-height: 1.1;
  margin: 0;
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

const StyledTextBlob = styled.div`
  font-family: 'Titillium Web', sans-serif
  font-weight: 490;
  line-height: 1.7;
  font-size: 18px;
`;
const StyledTextDiv = styled.div`
`;

const StyledEmailLink = styled.a`
  ${mixins.smallButton};
`;

const StyledSubtitle = styled.h3`
  // color: ${colors.white};
  font-size: 30px;
  font-weight: 600;
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

const LearnMore = () => {

  return (
    <StyledContainer id="LearnMore">
      <StyledDiv>
      <StyledTextDiv>
          <StyledSubtitle>Things I can do...</StyledSubtitle>
          {/* <StyledDiv dangerouslySetInnerHTML={{ __html: "<ul><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li></ul>" }} /> */}
          <StyledTextBlob>
            <ul>
              <li>Suggest a restuarant based on cuisine type</li>
              <li>Suggest based on delivery, takeaway or dine-out option</li>
              <li>Tell you information about opening and contact hours</li>
              <li>Bring you the menu for selected restaurant</li>
            </ul>
          </StyledTextBlob>
          <br></br>
          <br></br>
          <br></br>
          <div>
              <Link
                activeClass="active"
                to="Chatbot"
                spy={true}
                smooth={true}
                duration={700}
              >
            <StyledEmailLink href={``}>
                Chat Now!
            </StyledEmailLink>
              </Link>
          </div>
        </StyledTextDiv>
      </StyledDiv>
    </StyledContainer>
  )
}

export default LearnMore
