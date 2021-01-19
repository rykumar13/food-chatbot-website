import React from "react";

import "./GetStartedBtn.css";

const GetStartedBtn = (props) => {
  const options = [
    {
      text: "Get Started!",
      handler: props.actionProvider.handleGetStartedBtn,
      id: 1,
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="GetStartedBtn-button"
    >
      {option.text}
    </button>
  ));

  return <div className="getStartedBtn-container">{buttonsMarkup}</div>;
};

export default GetStartedBtn;
