import React, { useState, useEffect } from "react";
import axios from "axios";

function UserShow(props) {
  const [user, setUser] = useState([]);
  
  console.log("======usershow component running======")

  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get(`http://localhost:3001/api/users/${props.user.id}`);
      console.log("=====fetch====", response)
      setUser(response.data);
    }
    fetchData();
  }, [user]);

  const { name, email, photo, password, favorites } = user;
  return (
    <div className="user-preview">
      <img src={photo} alt={name} className="user-image" />
      <h3>{name}</h3>
      {props.isLoggedIn ? <h4>Favorites: {favorites}</h4> : ""}
    </div>
  );
}


export default UserShow;