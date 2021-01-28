import { React, useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Section from "../../styles/Section";
import mixins from "../../styles/mixins";
import bg from "../../images/landing8.jpg";
import { getTrending } from "../../chatbot/data/data";

const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  padding: 60px 0;
  align-items: center;
  @media (max-width: 48em) {
    padding-top: 00px;
  }
`;
const StyledTitle = styled.h2`
  // color: ${colors.cream_text};
  height: 150px;
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
  //position: absolute; /* or absolute */
  margin: auto:
  height: 350px;
  display: grid;
  grid-template-columns: 250px 250px 250px;
  grid-gap: 30px;
`;

const StyledBox = styled.div`
  border-radius: 5px;
  font-size: 100%;
  line-height: 1.1;
`;

const StyledImg = styled.img`
  height: 185px;
  width: 260px;
  border-radius: 0.6rem;
`;

const StyledRestaurantName = styled.h6`
  text-decoration: none;
  white-space: nowrap;
  display: inline;
  font-size: 1.2rem;
  line-height: 1.5;
  color: rgb(28, 28, 28);
  font-weight: 600;
`
const StyledRestaurantLocality = styled.h6`
  text-decoration: none;
  white-space: nowrap;
  display: inline;
  // font-size: 1.4rem;
  line-height: 1.5;
  color: rgb(79, 79, 79);
  font-weight: 400;
`
const StyledRestaurantCategory = styled.h6`
  text-decoration: none;
  white-space: nowrap;
  display: inline;
  // font-size: 1.4rem;
  line-height: 1.5;
  color: rgb(79, 79, 79);
  font-weight: 400;
`
const StyledRestaurantRating = styled.h6`
  text-decoration: none;
  white-space: nowrap;
  display: inline;
  // font-size: 1.4rem;
  line-height: 1.5;
  color: rgb(79, 79, 79);
  font-weight: 400;
`

const Trending = () => {
  const [currentTrending, setCurrentTrending] = useState(null);

  useEffect(() => {
    const getTrendingList = async () => {
      let trendingList = await getTrending();
      if (trendingList) return setCurrentTrending(trendingList);
      setCurrentTrending("no trending found");
    };
    getTrendingList();
  }, []);

  if (!currentTrending) return null;
  return (
    <StyledContainer id="trending">
      <StyledTitle>Trending in Auckland</StyledTitle>
      <StyledWrapper>
        <StyledBox>
          <StyledImg alt="test" src={currentTrending[0]["restaurant"]["thumb"]} />
          <StyledRestaurantName>{currentTrending[0]["restaurant"]["name"]}</StyledRestaurantName>
          <br></br>
          <StyledRestaurantRating>Rating: {currentTrending[0]["restaurant"]["user_rating"]["aggregate_rating"]} ({currentTrending[0]["restaurant"]["user_rating"]["votes"]})</StyledRestaurantRating>
          <br></br>
          <StyledRestaurantLocality>{currentTrending[0]["restaurant"]["location"]["locality"]}</StyledRestaurantLocality>
          <br></br>
          <StyledRestaurantCategory>{currentTrending[0]["restaurant"]["cuisines"]}</StyledRestaurantCategory>
        </StyledBox>
        <StyledBox>
          <StyledImg alt="test" src={currentTrending[1]["restaurant"]["thumb"]} />
          <StyledRestaurantName>{currentTrending[1]["restaurant"]["name"]}</StyledRestaurantName>
          <br></br>
          <StyledRestaurantRating>Rating: {currentTrending[1]["restaurant"]["user_rating"]["aggregate_rating"]} ({currentTrending[1]["restaurant"]["user_rating"]["votes"]})</StyledRestaurantRating>
          <br></br>
          <StyledRestaurantLocality>{currentTrending[1]["restaurant"]["location"]["locality"]}</StyledRestaurantLocality>
          <br></br>
          <StyledRestaurantCategory>{currentTrending[1]["restaurant"]["cuisines"]}</StyledRestaurantCategory>
        </StyledBox>
        <StyledBox>
          <StyledImg alt="test" src={currentTrending[2]["restaurant"]["thumb"]} />
          <StyledRestaurantName>{currentTrending[2]["restaurant"]["name"]}</StyledRestaurantName>
          <br></br>
          <StyledRestaurantRating>Rating: {currentTrending[2]["restaurant"]["user_rating"]["aggregate_rating"]} ({currentTrending[2]["restaurant"]["user_rating"]["votes"]})</StyledRestaurantRating>
          <br></br>
          <StyledRestaurantLocality>{currentTrending[2]["restaurant"]["location"]["locality"]}</StyledRestaurantLocality>
          <br></br>
          <StyledRestaurantCategory>{currentTrending[2]["restaurant"]["cuisines"]}</StyledRestaurantCategory>
        </StyledBox>
        <StyledBox>
          <StyledImg alt="test" src={currentTrending[3]["restaurant"]["thumb"]} />
          <StyledRestaurantName>{currentTrending[3]["restaurant"]["name"]}</StyledRestaurantName>
          <br></br>
          <StyledRestaurantRating>Rating: {currentTrending[3]["restaurant"]["user_rating"]["aggregate_rating"]} ({currentTrending[3]["restaurant"]["user_rating"]["votes"]})</StyledRestaurantRating>
          <br></br>
          <StyledRestaurantLocality>{currentTrending[3]["restaurant"]["location"]["locality"]}</StyledRestaurantLocality>
          <br></br>
          <StyledRestaurantCategory>{currentTrending[3]["restaurant"]["cuisines"]}</StyledRestaurantCategory>
        </StyledBox>
        <StyledBox>
          <StyledImg alt="test" src={currentTrending[4]["restaurant"]["thumb"]} />
          <StyledRestaurantName>{currentTrending[4]["restaurant"]["name"]}</StyledRestaurantName>
          <br></br>
          <StyledRestaurantRating>Rating: {currentTrending[4]["restaurant"]["user_rating"]["aggregate_rating"]} ({currentTrending[4]["restaurant"]["user_rating"]["votes"]})</StyledRestaurantRating>
          <br></br>
          <StyledRestaurantLocality>{currentTrending[4]["restaurant"]["location"]["locality"]}</StyledRestaurantLocality>
          <br></br>
          <StyledRestaurantCategory>{currentTrending[4]["restaurant"]["cuisines"]}</StyledRestaurantCategory>
        </StyledBox>
        <StyledBox>
          <StyledImg alt="test" src={currentTrending[5]["restaurant"]["thumb"]} />
          <StyledRestaurantName>{currentTrending[5]["restaurant"]["name"]}</StyledRestaurantName>
          <br></br>
          <StyledRestaurantRating>Rating: {currentTrending[5]["restaurant"]["user_rating"]["aggregate_rating"]} ({currentTrending[5]["restaurant"]["user_rating"]["votes"]})</StyledRestaurantRating>
          <br></br>
          <StyledRestaurantLocality>{currentTrending[5]["restaurant"]["location"]["locality"]}</StyledRestaurantLocality>
          <br></br>
          <StyledRestaurantCategory>{currentTrending[5]["restaurant"]["cuisines"]}</StyledRestaurantCategory>
        </StyledBox>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Trending;
