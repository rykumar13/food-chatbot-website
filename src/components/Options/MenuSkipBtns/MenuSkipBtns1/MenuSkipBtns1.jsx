import React from "react";

import "./MenuSkipBtns1.css";

const MenuSkipBtns1 = (props) => {
  const MenuSkipBtns1 = [
    {
        text: "See Menu",
        handler: props.actionProvider.handleMenuBtn1,
        id: 1,
      },
    {
      text: "Next Suggestion",
      handler: props.actionProvider.handleSkipBtn1,
      id: 2,
    },
    {
      text: "Opening Hours",
      handler: props.actionProvider.handleOpeningHrsBtn1,
      id: 3,
    },
  {
    text: "Contact",
    handler: props.actionProvider.handleContactDetailsBtn1,
    id: 4,
  },
  ];

  const buttonsMarkup = MenuSkipBtns1.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="MenuSkipBtns1-button"
    >
      {option.text}
    </button>
  ));

  return <div className="MenuSkipBtns1-container">{buttonsMarkup}</div>;
};

export default MenuSkipBtns1;
