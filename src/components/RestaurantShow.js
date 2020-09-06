import React from "react";
// import "./RestaurantShow.css";
function RestaurantShow(props) {
  const { name, address, likes, reviews, image_url } = props.restaurant;
  return (
    <div className="restaurant-preview">
      <img src={image_url} alt={name} className="restaurant-image" />
      <h3>{name}</h3>
      {props.isLoggedIn ? <h4>Likes: {likes}</h4> : ""}
      {/* {props.isLoggedIn ? <h4>Reviews: {reviews.username}: {reviews.text}</h4> : ""} */}
      {props.isLoggedIn ? <h4>Address: {address}</h4> : ""}
    </div>
  );
}
// console.log(username)

export default RestaurantShow;