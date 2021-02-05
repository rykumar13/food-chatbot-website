import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/data";

import "./ContactDetails5.css";

const ContactDetails5 = ({ cuisineType, categoryType, latitude, longitude, scrollIntoView }) => {
  const [ContactDetails5, setContactDetails5] = useState(null);

  useEffect(() => {
    const getContactDetails5 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setContactDetails5(restaurantList);
      setContactDetails5("sorry, no ContactDetails5 available.");
    };
    getContactDetails5();
  }, [cuisineType, categoryType, latitude, longitude]);

  useEffect(() => scrollIntoView());

  const renderContactDetails5 = () => {
    return (
      <p className="ContactDetails5-widget-list-item" key={1}>Contact: {ContactDetails5[4]["restaurant"]["phone_numbers"]}
      </p>
    );
  };

  if (!ContactDetails5) return null;

  return (
    <div className="ContactDetails5-widget">
      <ul className="ContactDetails5-widget-list">{renderContactDetails5()}</ul>
    </div>
  );
};

export default ContactDetails5;
