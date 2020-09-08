import React from "react";

function UserEdit(props) {
    const { name, _id, email, password, photo, favorites } = props.user;
    return (
        <div className="user-edit">
            <h1>Edit your Profile, {name}</h1>
            <br />
            <form action={`/users/${_id}?_method=PUT`} method="POST" className="new-form">
                Name: <input type="text" name="name" defaultValue={name} />
                <br />
                Photo: <input type="text" name="photo" defaultValue={photo} />
                <br />
                Favorites: <input type="text" name="favorites" defaultValue={favorites} />
                <br />
                <input type="submit" name="" value="Submit Card"></input>
            </form>
        </div>
    );
}


export default UserEdit;