import React, { useState, useEffect } from "react";

import "./Restaurant4.css";

import { getRestaurants } from "../../../chatbot/data/data";
//import { getRestaurants } from "../../../chatbot/data/mock_response";

const Restaurant4 = ({ cuisineType, categoryType, latitude, longitude}) => {
  const [currentRestaurant, setCurrentRestaurant] = useState(null);

  useEffect(() => {
    const getRestaurantsList = async () => {
      let restaurantList = await getRestaurants(
        cuisineType,
        categoryType,
        latitude,
        longitude
      );
      if (restaurantList) return setCurrentRestaurant(restaurantList);
      setCurrentRestaurant("no restaurants found");
    };
    getRestaurantsList();
  }, [cuisineType, categoryType, latitude, longitude]);

  const renderRestaurant = () => {
    return (
      <p className="restaurant-widget-list-item" key={1}>
        {currentRestaurant[3]["restaurant"]["name"]}
        <br></br>
        {currentRestaurant[3]["restaurant"]["location"]["address"]}
          <br></br>
        {"This place has a rating of "}
        {currentRestaurant[3]["restaurant"]["user_rating"]["aggregate_rating"]}
      </p>
    );
  };

  if (!currentRestaurant) return null;

  return (
    <div className="restaurants-widget">
      <ul className="restaurants-widget-list">{renderRestaurant()}</ul>
    </div>
  );
};

export default Restaurant4;
