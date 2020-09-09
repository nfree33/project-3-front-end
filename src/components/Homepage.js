import React from "react";
import NavBar from "./NavBar";
import Jumbotron from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Homepage(props) {
  return (
    <div>
      <Jumbotron className="jumbotron">
          <h1>Welcome to FOOdBar</h1>
          <h4><i>Never forget your favorite spots! </i></h4>
    </Jumbotron>
    <Container className="howitworks">
              
        
              <h2>How it works (not sure about this font) </h2>

              <br/>
              <div className="row" style={{color: 'black'}}>
                <div className="col-md-4 col-sm-12">
                  <img className="hp-icon" src="/images/sign-up.png" alt="" width="100" height="100"/>
                  <p>Join our community</p>
                </div>

                <div className="col-md-4 col-sm-12">
                  <img className="hp-icon" src="/images/add-icon.png" alt="" width="100" height="100"/>
                  <p>Track your favorite places</p>
                </div>  
                
                <div className="col-md-4 col-sm-12 ">
                  <img className="hp-icon" src="/images/icons-friends.png" alt="" width="100" height="100"/>
                  <p>Meet other Foodie Friends!</p>
                </div>

                
           </div>


    </Container>


    </div>
  );
}

export default Homepage;
