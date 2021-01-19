import React from "react";

import "./NextRestartBtns4.css";

const NextRestartBtns4 = (props) => {
  const NextRestartBtns4 = [
    {
      text: "Restart",
      handler: props.actionProvider.handleGetStartedBtn,
      id: 1,
    },
  ];

  const buttonsMarkup = NextRestartBtns4.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="NextRestartBtns4-button"
    >
      {option.text}
    </button>
  ));

  return <div className="NextRestartBtns4-container">{buttonsMarkup}</div>;
};

export default NextRestartBtns4;
