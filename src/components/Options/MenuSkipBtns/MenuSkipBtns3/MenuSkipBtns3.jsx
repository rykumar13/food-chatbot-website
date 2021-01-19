import React from "react";

import "./MenuSkipBtns3.css";

const MenuSkipBtns3 = (props) => {
  const MenuSkipBtns3 = [
    {
      text: "See Menu",
      handler: props.actionProvider.handleMenuBtn3,
      id: 1,
    },
  {
    text: "Next Suggestion",
    handler: props.actionProvider.handleSkipBtn3,
    id: 2,
  },
  {
    text: "Opening Hours",
    handler: props.actionProvider.handleOpeningHrsBtn3,
    id: 3,
  },
{
  text: "Contact",
  handler: props.actionProvider.handleContactDetailsBtn3,
  id: 4,
},
  ];

  const buttonsMarkup = MenuSkipBtns3.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="MenuSkipBtns3-button"
    >
      {option.text}
    </button>
  ));

  return <div className="MenuSkipBtns3-container">{buttonsMarkup}</div>;
};

export default MenuSkipBtns3;
