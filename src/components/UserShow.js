import React from "react";

function UserShow(props) {
  console.log("======usershow component running======")
  console.log(props.user)
  const { name, email, photo, password, favorites } = props.user;
  return (
    <div className="user-preview">
      <img src={photo} alt={name} className="user-image" />
      <h3>{name}</h3>
      {props.isLoggedIn ? <h4>Favorites: {favorites}</h4> : ""}
    </div>
  );
}


export default UserShow;