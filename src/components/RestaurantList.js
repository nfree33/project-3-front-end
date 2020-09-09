import React, { useState, useEffect } from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";
import RestaurantShow from "./RestaurantShow";

const RestaurantList = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/api/restaurants");
      setRestaurants(response.data);
      // console.log(response.data)
    }
    fetchData();
  }, [restaurants]);
  const showRestaurants = restaurants.map((restaurant, i) => {
    const { name, address, _id, likes, reviews, image_url } = restaurant;
    return (
      <div key={i}>
        <div className="restaurant-preview">
            <img src={image_url} alt={name} className="restaurant-image" />
            <Link to={`/restaurants/${_id}`}><h3>{name}</h3></Link>
            {props.isLoggedIn ? <h4>Likes: {likes}</h4> : ""}
            {props.isLoggedIn ? <h4>Reviews: {reviews.username}: {reviews.text}</h4> : ""}
            {props.isLoggedIn ? <h4>Address: {address}</h4> : ""}
        </div>

      </div>
    );
  });
  return <div>{showRestaurants}</div>;
};

export default RestaurantList;