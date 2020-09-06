import React from "react";
// import "./NavBar.css";

function NavBar(props) {
  let navBarItems = [
    <li key={1}>
      <a href="/">Home</a>
    </li>,
  ];
  if (props.isLoggedIn) {
    navBarItems.push(
        <li key={3}>
          <a href="/restaurants">Restaurants</a>
        </li>
      );
    navBarItems.push(
      <li key={2}>
        <a href="/logout">Log Out</a>
      </li>
    );

  } else {
    navBarItems.push(
      <li key={4}>
        <a href="/signup">Sign Up</a>
      </li>
    );
    navBarItems.push(
      <li key={5}>
        <a href="/login">Log In</a>
      </li>
    );
  }

  return (
    <>
      <h1>Restaurant Tracker</h1>
      <nav>
         <ul>{navBarItems}</ul>
      </nav>
    </>
  );
}

export default NavBar;
