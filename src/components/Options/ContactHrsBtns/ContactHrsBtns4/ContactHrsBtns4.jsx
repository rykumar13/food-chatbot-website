import React from "react";

import "./ContactHrsBtns4.css";

const ContactHrsBtns4 = (props) => {
  const ContactHrsBtns4 = [
    {
      text: "Opening Hours",
      handler: props.actionProvider.handleOpeningHrsBtn4,
      id: 1,
    },
  {
    text: "Contact",
    handler: props.actionProvider.handleContactDetailsBtn4,
    id: 2,
  },
  ];

  const buttonsMarkup = ContactHrsBtns4.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="ContactHrsBtns4-button"
    >
      {option.text}
    </button>
  ));

  return <div className="ContactHrsBtns4-container">{buttonsMarkup}</div>;
};

export default ContactHrsBtns4;
