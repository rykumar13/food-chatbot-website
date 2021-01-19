import React, { useState, useEffect } from "react";

import { getRestaurants } from "../../../chatbot/data/data";

import "./OpeningHours3.css";

const OpeningHours3 = ({ cuisineType, categoryType, latitude, longitude }) => {
  const [OpeningHours3, setOpeningHours3] = useState(null);

  useEffect(() => {
    const getOpeningHours3 = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setOpeningHours3(restaurantList);
      setOpeningHours3("sorry, no OpeningHours3 available.");
    };
    getOpeningHours3();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderOpeningHours3 = () => {
    return (
      <p className="OpeningHours3-widget-list-item" key={1}>
        {OpeningHours3[2]["restaurant"]["timings"]}
      </p>
    );
  };

  if (!OpeningHours3) return null;

  return (
    <div className="OpeningHours3-widget">
      <ul className="OpeningHours3-widget-list">{renderOpeningHours3()}</ul>
    </div>
  );
};

export default OpeningHours3;
