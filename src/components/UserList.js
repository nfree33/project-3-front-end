import React, { useState, useEffect } from "react";
import axios from "axios";
import UserShow from "./UserShow";

const UserList = (props) => {
  console.log("=====UserList running======")
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/api/users");
      console.log("=====fetch====", response)
      setUsers(response.data);
    }
    fetchData();
  }, []);
  const showUsers = users.map((user, i) => {
    console.log(users)
    return (
      <div key={i}>
        <UserShow user={user} isLoggedIn={props.isLoggedIn} />
      </div>
    );
  });
  return <div>{showUsers}</div>;
};

export default UserList;