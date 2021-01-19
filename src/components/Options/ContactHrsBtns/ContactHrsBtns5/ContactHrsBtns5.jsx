import React from "react";

import "./ContactHrsBtns5.css";

const ContactHrsBtns5 = (props) => {
  const ContactHrsBtns5 = [
    {
      text: "Opening Hours",
      handler: props.actionProvider.handleOpeningHrsBtn5,
      id: 1,
    },
  {
    text: "Contact",
    handler: props.actionProvider.handleContactDetailsBtn5,
    id: 2,
  },
  ];

  const buttonsMarkup = ContactHrsBtns5.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="ContactHrsBtns5-button"
    >
      {option.text}
    </button>
  ));

  return <div className="ContactHrsBtns5-container">{buttonsMarkup}</div>;
};

export default ContactHrsBtns5;
