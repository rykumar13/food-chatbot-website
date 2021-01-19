import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/data";

import "./OpeningHours4.css";

const OpeningHours4 = ({ cuisineType, categoryType, latitude, longitude }) => {
  const [OpeningHours4, setOpeningHours4] = useState(null);

  useEffect(() => {
    const getOpeningHours4 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setOpeningHours4(restaurantList);
      setOpeningHours4("sorry, no OpeningHours4 available.");
    };
    getOpeningHours4();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderOpeningHours4 = () => {
    return (
      <p className="OpeningHours4-widget-list-item" key={1}>
        {OpeningHours4[3]["restaurant"]["timings"]}
      </p>
    );
  };

  if (!OpeningHours4) return null;

  return (
    <div className="OpeningHours4-widget">
      <ul className="OpeningHours4-widget-list">{renderOpeningHours4()}</ul>
    </div>
  );
};

export default OpeningHours4;
