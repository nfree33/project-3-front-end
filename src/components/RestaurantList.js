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
      console.log(response.data)
    }
    fetchData();
  }, []);


  const showRestaurants = restaurants.map((restaurant, i) => {
    return (
      <div key={i}>
        <a href="/restaurants/:id"> <h1>{restaurant.name} </h1></a>
        <img src={restaurant.image_url} alt={restaurant.name} className="restaurant-image" />      </div>
    );
  });
  return <div>{showRestaurants}</div>;
};

export default RestaurantList;

