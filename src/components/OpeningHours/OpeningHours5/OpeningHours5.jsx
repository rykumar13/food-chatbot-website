import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/data";

import "./OpeningHours5.css";

const OpeningHours5 = ({ cuisineType, categoryType, latitude, longitude, scrollIntoView }) => {
  const [OpeningHours5, setOpeningHours5] = useState(null);

  useEffect(() => {
    const getOpeningHours5 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setOpeningHours5(restaurantList);
      setOpeningHours5("sorry, no OpeningHours5 available.");
    };
    getOpeningHours5();
  }, [cuisineType, categoryType, latitude, longitude]);

  useEffect(() => scrollIntoView());

  const renderOpeningHours5 = () => {
    return (
      <p className="OpeningHours5-widget-list-item" key={1}>
        {OpeningHours5[4]["restaurant"]["timings"]}
      </p>
    );
  };

  if (!OpeningHours5) return null;

  return (
    <div className="OpeningHours5-widget">
      <ul className="OpeningHours5-widget-list">{renderOpeningHours5()}</ul>
    </div>
  );
};

export default OpeningHours5;
