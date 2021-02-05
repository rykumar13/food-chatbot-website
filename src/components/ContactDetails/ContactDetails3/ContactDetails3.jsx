import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/data";

import "./ContactDetails3.css";

const ContactDetails3 = ({ cuisineType, categoryType, latitude, longitude, scrollIntoView }) => {
  const [ContactDetails3, setContactDetails3] = useState(null);

  useEffect(() => {
    const getContactDetails3 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setContactDetails3(restaurantList);
      setContactDetails3("sorry, no ContactDetails3 available.");
    };
    getContactDetails3();
  }, [cuisineType, categoryType, latitude, longitude]);

  useEffect(() => scrollIntoView());

  const renderContactDetails3 = () => {
    return (
      <p className="ContactDetails3-widget-list-item" key={1}>Contact: {ContactDetails3[2]["restaurant"]["phone_numbers"]}
      </p>
    );
  };

  if (!ContactDetails3) return null;

  return (
    <div className="ContactDetails3-widget">
      <ul className="ContactDetails3-widget-list">{renderContactDetails3()}</ul>
    </div>
  );
};

export default ContactDetails3;
