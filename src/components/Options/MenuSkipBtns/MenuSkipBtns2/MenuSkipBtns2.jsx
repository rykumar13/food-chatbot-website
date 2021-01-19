import React from "react";

import "./MenuSkipBtns2.css";

const MenuSkipBtns2 = (props) => {
  const MenuSkipBtns2 = [
    {
      text: "See Menu",
      handler: props.actionProvider.handleMenuBtn2,
      id: 1,
    },
  {
    text: "Next Suggestion",
    handler: props.actionProvider.handleSkipBtn2,
    id: 2,
  },
  {
    text: "Opening Hours",
    handler: props.actionProvider.handleOpeningHrsBtn2,
    id: 3,
  },
{
  text: "Contact",
  handler: props.actionProvider.handleContactDetailsBtn2,
  id: 4,
},
  ];

  const buttonsMarkup = MenuSkipBtns2.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="MenuSkipBtns2-button"
    >
      {option.text}
    </button>
  ));

  return <div className="MenuSkipBtns2-container">{buttonsMarkup}</div>;
};

export default MenuSkipBtns2;
