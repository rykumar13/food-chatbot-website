import React from "react";

import "./ContactHrsBtns1.css";

const ContactHrsBtns1 = (props) => {
  const ContactHrsBtns1 = [
    {
      text: "Opening Hours",
      handler: props.actionProvider.handleOpeningHrsBtn1,
      id: 1,
    },
    {
      text: "Contact",
      handler: props.actionProvider.handleContactDetailsBtn1,
      id: 2,
    },
  ];

  const buttonsMarkup = ContactHrsBtns1.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="ContactHrsBtns1-button"
    >
      {option.text}
    </button>
  ));

  return <div className="ContactHrsBtns1-container">{buttonsMarkup}</div>;
};

export default ContactHrsBtns1;
