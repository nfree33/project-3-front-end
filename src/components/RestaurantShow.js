import React, { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

// import "./RestaurantShow.css";
function RestaurantShow(props) {
  // load up params from react router:
  const params = useParams()
  // console.log("-----match-----", params.id)

  const [restaurant, setRestaurant] = useState([]);
  
  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get(`http://localhost:3001/api/restaurants/${params.id}`);
      console.log("=====fetch====", response)
      setRestaurant(response.data);
    }
    fetchData();
  }, [!restaurant]);

  const { name, address, likes, reviews, image_url } = restaurant;
  return (
    <div className="restaurant-preview">
      <img src={image_url} alt={name} className="restaurant-image" />
      <h3>{name}</h3>
      {props.isLoggedIn ? <h4>Likes: {likes}</h4> : ""}
      {/* {props.isLoggedIn ? <h4>Reviews: {reviews.username}: {reviews.text}</h4> : ""} */}
      {/* {props.isLoggedIn ? <h4>Address: {address}</h4> : ""} */}
    </div>
  );
}
// console.log(username)

export default RestaurantShow;