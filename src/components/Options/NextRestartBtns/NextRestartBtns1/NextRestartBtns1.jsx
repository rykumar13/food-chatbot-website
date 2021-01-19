import React from "react";

import "./NextRestartBtns1.css";

const NextRestartBtns1 = (props) => {
  const NextRestartBtns1 = [
    {
      text: "Restart",
      handler: props.actionProvider.handleGetStartedBtn,
      id: 2,
    },
  ];

  const buttonsMarkup = NextRestartBtns1.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="NextRestartBtns1-button"
    >
      {option.text}
    </button>
  ));

  return <div className="NextRestartBtns1-container">{buttonsMarkup}</div>;
};

export default NextRestartBtns1;
