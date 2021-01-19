import React from "react";

import "./NextRestartBtns2.css";

const NextRestartBtns2 = (props) => {
  const NextRestartBtns2 = [
    {
      text: "Restart",
      handler: props.actionProvider.handleGetStartedBtn,
      id: 1,
    },
  ];

  const buttonsMarkup = NextRestartBtns2.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="NextRestartBtns2-button"
    >
      {option.text}
    </button>
  ));

  return <div className="NextRestartBtns2-container">{buttonsMarkup}</div>;
};

export default NextRestartBtns2;
