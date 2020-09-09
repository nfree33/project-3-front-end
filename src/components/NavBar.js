import React from "react";
import { withRouter } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Jumbotron } from "react-bootstrap";


function NavBar(props) {
  let navBarItems = [
    <li key={1}>
      <a href="/">Home</a>
    </li>,
  ];
  if (props.isLoggedIn) {
    navBarItems.push(
        <li key={2}>
          <a href="/restaurants">Restaurants</a>
        </li>
      );
      navBarItems.push(
        <li key={3}>
          <a href="/profile">Profile</a>
        </li>
      );

      navBarItems.push(
        <li key={4}>
          <a href="/allusers">All Users</a>
        </li>
      );
    navBarItems.push(
      <li key={5}>
        <a href="/logout">Log Out</a>
      </li>
    );

  } else {
    navBarItems.push(
      <li key={6}>
        <a href="/signup">Sign Up</a>
      </li>
    );
    navBarItems.push(
      <li key={7}>
        <a href="/login">Log In</a>
      </li>
    );
  }

  return (
    <>
      <nav bg="dark">
         <ul>{navBarItems}</ul>
        
      </nav>
    </>
  );
}

export default withRouter(NavBar);
