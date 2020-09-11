import React, { useState, useEffect } from "react";
import {useParams, Link} from "react-router-dom";
import axios from "axios";

function UserEdit(props) {
    const [user, setUser] = useState([]);
    useEffect(() => {
        // Need to wrap this in an async function to use await inside:
        async function fetchData() {
          const response = await axios.get(`https://foodbar-group-project.herokuapp.com/api/users/${props.user.id}`);
          console.log("=====fetch====", response)
          setUser(response.data);
        }
        fetchData();
      }, [!user]);

console.log(props)



    const { name, _id, email, password, photo, favorites } = user;
    console.log('useredit info', user)
    return (
        <div className="user-edit">
            <h1>Edit your Profile, {props.user.email}</h1>
            <br />
            <form action={`/users/${_id}?_method=PUT`} method="POST" className="new-form">
                Name: <input type="text" name="name" defaultValue={name} />
                <br />
                Photo: <input type="text" name="photo" defaultValue={photo} />
                <br />
                <input type="submit" name="" value="Submit Card" ></input>
            </form>
        </div>
    );
}


export default UserEdit;