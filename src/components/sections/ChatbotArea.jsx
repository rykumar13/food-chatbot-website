import React from "react";
import Chatbot from "react-chatbot-kit";

import styled from "styled-components";
import theme from "../../styles/theme";
import Section from "../../styles/Section";
import mixins from "../../styles/mixins";

import ActionProvider from "../../chatbot/ActionProvider";
import config from "../../chatbot/config";
import MessageParser from "../../chatbot/MessageParser";

import bg from "../../images/landing9.jfif";

import { Link } from "react-scroll";

const { colors } = theme;

const StyledContainer = styled(Section)`
  background-color: ${colors.navy};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  /// max-height:100%;
  object-fit: fill;
  padding: 60px 0;
  min-height: 100vh;
  word-wrap: break-word;
  @media (max-width: 48em) {
    padding: 60px 0;
  // }
  // div {
  //   width: 100%;
  // }
`;

const StyledSubtitle = styled.h3`
  color: ${colors.white};
  font-size: 30px;
  font-weight: 600;
  line-height: 1.6;
  font-style: italic;
  @media (max-width: 63em) {
    font-size: 25px;
  }
  @media (max-width: 48em) {
    font-size: 20px;
  }
  // @media (max-width: 30em) {
  //   font-size: 15px;
  // }
  // @media (max-width: 24em) {
  //   font-size: 10px;
  // }
`;

const StyledEmailLink = styled.a`
  ${mixins.smallButton};
  //margin-top: 20px;
`;

const saveMessages = (messages) => {
  // localStorage.setItem("chat_messages", JSON.stringify(messages));
};

const loadMessages = () => {
  // const messages = JSON.parse(localStorage.getItem("chat_messages"));
  // return messages;
};

const StyledTextBlob = styled.div`
  color: ${colors.white};
  font-family: 'Titillium Web', sans-serif
  font-weight: bold;
  line-height: 1.7;
  font-size: 20px;
  font-style: italic;
  word-wrap: break-word;
  margin-left: 20px;
  // background: ${colors.cream_text};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
const StyledTextDiv = styled.div`
  // max-width: 350px;
  // height: 450px;
  // margin-top: -120px;
  //margin-left: 150px;
  // @media (max-width: 590px) {
  //   margin-left: 25px;
  // }
`;

const StyledChat = styled.div`
  padding: 30px 0;
  // max-width: 25%;
  // margin-right: 300px;
`;

const MainArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // margin-left: 350px;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const ChatbotArea = () => {
  return (
    <StyledContainer id="Chatbot">
      <MainArea>
        <StyledChat>
          <Chatbot
            config={config}
            actionProvider={ActionProvider}
            messageHistory={loadMessages()}
            messageParser={MessageParser}
            saveMessages={saveMessages}
          />
        </StyledChat>
        {/* <StyledTextDiv>
          <StyledSubtitle>Things I can do...</StyledSubtitle>
          <StyledTextBlob>
            <ul>
              <li>Suggest a restaurant based on cuisine type</li>
              <li>Suggest based on delivery, takeaway or dine-out option</li>
              <li>Tell you information about opening and contact hours</li>
              <li>Bring you the menu for selected restaurant</li>
            </ul>
          </StyledTextBlob>
          <br></br>
          <StyledSubtitle>Still cant decide?</StyledSubtitle>
          <div>
              <Link
                activeClass="active"
                to="trending"
                spy={true}
                smooth={true}
                duration={700}
              >
            <StyledEmailLink href={``}>
                See Trending
            </StyledEmailLink>
              </Link>
          </div>
        </StyledTextDiv> */}
      </MainArea>
    </StyledContainer>
  );
};

export default ChatbotArea;
