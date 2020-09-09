import React from "react";
import "../scss/styles.scss";
import { withRouter, useParams } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Jumbotron } from "react-bootstrap";



function RestaurantShow(props) {
  const { name, address, likes, reviews, image_url } = props.restaurant;
  const { _id } = useParams();
  console.log(props.match.params._id)
  return (
    <div className="restaurant-preview">
<img src={image_url} alt={name} className="restaurant-image" />
      <h3>{name} {_id}</h3>
      {props.isLoggedIn ? <h4>Likes: {likes}</h4> : ""}
      {/* {props.isLoggedIn ? <h4>Reviews: {reviews.username}: {reviews.text}</h4> : ""} */}
      {props.isLoggedIn ? <h4>Address: {address}</h4> : ""}
    </div>
  );
}

export default RestaurantShow;