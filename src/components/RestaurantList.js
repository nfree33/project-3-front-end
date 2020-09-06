import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantShow from "./RestaurantShow";

const RestaurantList = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/api/restaurants");
      setRestaurants(response.data);
    }
    fetchData();
  }, [restaurants]);
  const showRestaurants = restaurants.map((restaurant, i) => {
    return (
      <div key={i}>
        <RestaurantShow restaurant={restaurant} isLoggedIn={props.isLoggedIn} />
      </div>
    );
  });
  return <div>{showRestaurants}</div>;
};

export default RestaurantList;