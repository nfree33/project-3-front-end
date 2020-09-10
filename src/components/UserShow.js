import React, { useState, useEffect } from "react";
import axios from "axios";
import Jumbotron from 'react-bootstrap/Button';


function UserShow(props) {
  const [user, setUser] = useState([]);
  
  console.log("======usershow component running======")
  console.log(props)
  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get(`http://localhost:3001/api/users/${props.user.id}`);
      console.log("=====fetch====", response)
      setUser(response.data);
    }
    fetchData();
  }, [!user]);

  const { name, email, photo, password, favorites } = user;
  return (
    <Jumbotron className="jumbotron-3">
    <div className="user-preview container-changes-2">
    <h1>{name}</h1>
      <img src={photo} alt={name} className="user-image" />
    <h3>{email}</h3>
      {props.isLoggedIn ? <h4>Favorites: {favorites}</h4> : ""}
    </div>
    </Jumbotron>
  );
}


export default UserShow;