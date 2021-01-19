import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/data";

import "./OpeningHours2.css";

const OpeningHours2 = ({ cuisineType, categoryType, latitude, longitude }) => {
  const [OpeningHours2, setOpeningHours2] = useState(null);

  useEffect(() => {
    const getOpeningHours2 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setOpeningHours2(restaurantList);
      setOpeningHours2("sorry, no OpeningHours2 available.");
    };
    getOpeningHours2();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderOpeningHours2 = () => {
    return (
      <p className="OpeningHours2-widget-list-item" key={1}>
        {OpeningHours2[1]["restaurant"]["timings"]}
      </p>
    );
  };

  if (!OpeningHours2) return null;

  return (
    <div className="OpeningHours2-widget">
      <ul className="OpeningHours2-widget-list">{renderOpeningHours2()}</ul>
    </div>
  );
};

export default OpeningHours2;
