import {React, useState, useEffect} from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Section from "../../styles/Section";
import mixins from "../../styles/mixins";
import bg from "../../images/landing8.jpg";
import { getTrending } from "../../chatbot/data/data";

const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled(Section)`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  max-width: 100%;
  padding: 60px 0;
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-center;
  min-height: 100vh;
  @media (max-width: 48em) {
    padding-top: 00px;
  }
  // div {
  //   width: 100%;
  // }
`;
const StyledTitle = styled.h2`
  // color: ${colors.cream_text};
  height: 600px;
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
`;

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
`;

const StyledWrapper = styled.div`
  position: absolute; /* or absolute */
  margin: auto:
  height: auto;
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-gap: 30px;
  /* background-color: #fff; */
  color: #444;
`;

const StyledBox = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
`;


const Trending = () => {
  const [currentTrending, setTrending] = useState(null)

  useEffect(() => {
    const getTrendingList = async () => {
      let trendingList = await getTrending();
      if (trendingList) return setTrending(trendingList);
      setTrending("no trending found.");
  };
  getTrendingList(); 
}, []);
  
  return (
    <StyledContainer id="trending">
      <StyledTitle>Trending in Auckland</StyledTitle>
      <StyledWrapper>
        <StyledBox>{currentTrending[0]["restaurant"]["name"]}</StyledBox>
        <StyledBox>{currentTrending[1]["restaurant"]["name"]}</StyledBox>
        <StyledBox>{currentTrending[2]["restaurant"]["name"]}</StyledBox>
        <StyledBox>{currentTrending[3]["restaurant"]["name"]}</StyledBox>
        <StyledBox>{currentTrending[4]["restaurant"]["name"]}</StyledBox>
        <StyledBox>{currentTrending[5]["restaurant"]["name"]}</StyledBox>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Trending;
