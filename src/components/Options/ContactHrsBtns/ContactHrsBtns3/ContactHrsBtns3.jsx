import React from "react";

import "./ContactHrsBtns3.css";

const ContactHrsBtns3 = (props) => {
  const ContactHrsBtns3 = [
    {
      text: "Opening Hours",
      handler: props.actionProvider.handleOpeningHrsBtn3,
      id: 1,
    },
  {
    text: "Contact",
    handler: props.actionProvider.handleContactDetailsBtn3,
    id: 2,
  },
  ];

  const buttonsMarkup = ContactHrsBtns3.map((option) => (
    <button
      key={option.id}
      onClick={option.handler}
      className="ContactHrsBtns3-button"
    >
      {option.text}
    </button>
  ));

  return <div className="ContactHrsBtns3-container">{buttonsMarkup}</div>;
};

export default ContactHrsBtns3;
