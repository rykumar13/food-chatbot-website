import React from "react";
import Chatbot from "react-chatbot-kit";

import styled from "styled-components";
import theme from "../../styles/theme";
import Section from "../../styles/Section";

import ActionProvider from "../../chatbot/ActionProvider";
import config from "../../chatbot/config";
import MessageParser from "../../chatbot/MessageParser";

const { colors } = theme;

const StyledContainer = styled(Section)`
  background-color: ${colors.navy};
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  object-fit: fill;
  padding: 60px 0;
  min-height: 100vh;
  word-wrap: break-word;
  @media (max-width: 48em) {
    padding: 60px 0;
`;

const saveMessages = (messages) => {
  // localStorage.setItem("chat_messages", JSON.stringify(messages));
};

const loadMessages = () => {
  // const messages = JSON.parse(localStorage.getItem("chat_messages"));
  // return messages;
};

const StyledChat = styled.div``;

const MainArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      </MainArea>
    </StyledContainer>
  );
};

export default ChatbotArea;
