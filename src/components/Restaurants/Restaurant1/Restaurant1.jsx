import React, { useState, useEffect } from "react";

import "./Restaurant1.css";

import { getRestaurants } from "../../../chatbot/data/data";

const Restaurant1 = ({ cuisineType, categoryType, latitude, longitude, scrollIntoView }) => {
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

  useEffect(() => scrollIntoView());

  const renderRestaurant = () => {
    return (
      <p className="restaurant-widget-list-item" key={1}>
        {currentRestaurant[0]["restaurant"]["name"]}
        <br></br>
        {currentRestaurant[0]["restaurant"]["location"]["address"]}
        <br></br>
        {"This place has a rating of "}
        {currentRestaurant[0]["restaurant"]["user_rating"]["aggregate_rating"]}
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

export default Restaurant1;
