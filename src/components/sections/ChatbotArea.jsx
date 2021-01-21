import React from "react";
import Chatbot from "react-chatbot-kit";

import styled from "styled-components";
import theme from "../../styles/theme";
import Section from "../../styles/Section";
import mixins from "../../styles/mixins";

import ActionProvider from "../../chatbot/ActionProvider";
import config from "../../chatbot/config";
import MessageParser from "../../chatbot/MessageParser";

import bg from "../../images/landing3.jpg";

const { colors, fonts, fontSizes } = theme;

const StyledContainer = styled(Section)`
  // color: ${colors.cream_text};
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  max-width: 100%;
  /// max-height:100%;
  object-fit: fill;
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
`;

const StyledTitle = styled.h2`
  // color: ${colors.white};
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
  // color: ${colors.white};
  font-size: 40px;
  font-weight: 600;
  line-height: 1.6;
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

const StyledSubtitle2 = styled.h3`
  // color: ${colors.white};
  height: 0px;
  font-size: 40px;
  font-weight: 600;
  line-height: 1.6;
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

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 20px;
`;
const saveMessages = (messages) => {
  localStorage.setItem("chat_messages", JSON.stringify(messages));
};

const loadMessages = () => {
  const messages = JSON.parse(localStorage.getItem("chat_messages"));
  return messages;
};

const StyledDiv = styled.div`
  font-family: ${fonts.Calibre};
  text-align: left;
  font-weight: 490;
  line-height: 1.7;
  margin-left: 120px;
  font-size: 18px;
  // background: ${colors.cream_text};
`
const StyledTextDiv = styled.div`
  // max-width: 350px;
  height: 450px;
  margin-left: 150px;
`

const StyledChat = styled.div`
max-width: 20%;
margin-right: 400px;
`;

const MainArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChatbotArea = () => {
  return (
    <StyledContainer id="Chatbot">
      <MainArea>
      <StyledTextDiv>
      <StyledSubtitle>Things I can do...</StyledSubtitle>
      {/* <StyledDiv dangerouslySetInnerHTML={{ __html: "<ul><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li><li>Placeholder put something here to make look more filled.</li></ul>" }} /> */}
      <StyledDiv>
        <ul>
          <li>Suggest a restuarant based on cuisine type</li>
          <li>Suggest based on delivery, takeaway or dine-out option</li>
          <li>Tell you information about opening and contact hours</li>
          <li>Bring you the menu for selected restaurant</li>
        </ul>
      </StyledDiv>
      <br></br><br></br><br></br>
      <StyledSubtitle>Still cant decide?</StyledSubtitle>
      <div>
        <StyledEmailLink href={`mailto:rykumar13@gmail.com`}>
          See Trending
        </StyledEmailLink>
      </div>
      </StyledTextDiv>
      <StyledChat>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageHistory={loadMessages()}
        messageParser={MessageParser}
        saveMessages={saveMessages}
      />
      </StyledChat>
      </MainArea>
    </StyledContainer>
  );
};

export default ChatbotArea;
