import React from "react";

import "./NextRestartBtns3.css";

const NextRestartBtns3 = (props) => {
  const NextRestartBtns3 = [
    {
      text: "Restart",
      handler: props.actionProvider.handleGetStartedBtn,
      id: 1,
    },
  ];

  const buttonsMarkup = NextRestartBtns3.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="NextRestartBtns3-button"
    >
      {option.text}
    </button>
  ));

  return <div className="NextRestartBtns3-container">{buttonsMarkup}</div>;
};

export default NextRestartBtns3;
