import React from "react"
import Chatbot from "react-chatbot-kit";

import styled from "styled-components"
import theme from "../../styles/theme"
import Section from "../../styles/Section"
import mixins from "../../styles/mixins"

import ActionProvider from "../../chatbot/ActionProvider";
import config from "../../chatbot/config";
import MessageParser from "../../chatbot/MessageParser";

const { colors, fonts, fontSizes } = theme

const StyledContainer = styled(Section)`
  padding: 60px 0;
  ${mixins.flexCenter};
  flex-direction: column;
  align-items: flex-center;
  min-height: 90vh;
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

const StyledEmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 20px;
`
const saveMessages = (messages) => {
  localStorage.setItem("chat_messages", JSON.stringify(messages));
};

const loadMessages = () => {
  const messages = JSON.parse(localStorage.getItem("chat_messages"));
  return messages;
};

const ChatbotArea = () => {
  
    return (
      <StyledContainer id="Chatbot">
        <StyledTitle>Chat with Foodbot</StyledTitle>
        <StyledSubtitle>Let me suggest you a place to eat in Auckland. Have a craving for a certain cuisine? let me find a place for you...</StyledSubtitle>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageHistory={loadMessages()}
          messageParser={MessageParser}
          saveMessages={saveMessages}
        />
      </StyledContainer>
    )
  }
  
  export default ChatbotArea