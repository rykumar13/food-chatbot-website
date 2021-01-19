import React, { useState, useEffect } from "react";

import "./Restaurant5.css";

import { getRestaurants } from "../../../chatbot/data/data";
//import { getRestaurants } from "../../../chatbot/data/mock_response";

const Restaurant5 = ({ cuisineType, categoryType, latitude, longitude}) => {
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
        {currentRestaurant[4]["restaurant"]["name"]}
        <br></br>
        {currentRestaurant[4]["restaurant"]["location"]["address"]}
          <br></br>
        {"This place has a rating of "}
        {currentRestaurant[4]["restaurant"]["user_rating"]["aggregate_rating"]}
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

export default Restaurant5;
