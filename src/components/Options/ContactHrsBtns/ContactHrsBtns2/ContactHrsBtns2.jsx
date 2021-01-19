import React from "react";

import "./ContactHrsBtns2.css";

const ContactHrsBtns2 = (props) => {
  const ContactHrsBtns2 = [
    {
      text: "Opening Hours",
      handler: props.actionProvider.handleOpeningHrsBtn2,
      id: 1,
    },
  {
    text: "Contact",
    handler: props.actionProvider.handleContactDetailsBtn2,
    id: 2,
  },
  ];

  const buttonsMarkup = ContactHrsBtns2.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="ContactHrsBtns2-button"
    >
      {option.text}
    </button>
  ));

  return <div className="ContactHrsBtns2-container">{buttonsMarkup}</div>;
};

export default ContactHrsBtns2;
