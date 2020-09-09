import React, { useState, useEffect } from "react";
import axios from "axios";
import UserShow from "./UserShow";

const UserList = (props) => {
  console.log("=====UserList running======")
  // const { name, email, photo, password, favorites } = user;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/api/users");
      console.log("=====fetch====", response)
      setUsers(response.data);
    }
    fetchData();
    console.log(users)
  }, []);

  const showUsers = users.map((user, i) => {
    return (
      <div key={i}>
        <h1>Name: {user.name}</h1>
        <img src={user.photo} alt="Add Profile Picture!"/>
      </div>
    );
  });
  return <div>{showUsers}</div>;
};

export default UserList;