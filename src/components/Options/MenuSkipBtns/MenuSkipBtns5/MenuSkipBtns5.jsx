import React from "react";

import "./MenuSkipBtns5.css";

const MenuSkipBtns5 = (props) => {
  const MenuSkipBtns5 = [
    {
      text: "See Menu",
      handler: props.actionProvider.handleMenuBtn5,
      id: 1,
    },
  {
    text: "Next Suggestion",
    handler: props.actionProvider.handleSkipBtn5,
    id: 2,
  },
  {
    text: "Opening Hours",
    handler: props.actionProvider.handleOpeningHrsBtn5,
    id: 3,
  },
{
  text: "Contact",
  handler: props.actionProvider.handleContactDetailsBtn5,
  id: 4,
},
  ];

  const buttonsMarkup = MenuSkipBtns5.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="MenuSkipBtns5-button"
    >
      {option.text}
    </button>
  ));

  return <div className="MenuSkipBtns5-container">{buttonsMarkup}</div>;
};

export default MenuSkipBtns5;
