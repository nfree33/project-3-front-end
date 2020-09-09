import React from "react";
import NavBar from "./NavBar";
import Jumbotron from 'react-bootstrap/Button';


function Homepage(props) {
  return (
    <div>
      <Jumbotron className="jumbotron">
          <h1>Welcome to FOOdBar</h1>
          <h4><i>Never forget your favorite spots! </i></h4>
    </Jumbotron>

    </div>
  );
}

export default Homepage;
