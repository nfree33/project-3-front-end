import React, { useState, useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar";
import RestaurantList from "./components/RestaurantList";
import SignUpForm from "./components/SignUpForm";
import LogInForm from "./components/LogInForm";
import LogOut from "./components/LogOut";
// import "./App.css";


const App = (props) => {
  const [state, setState] = useState({
    email: "",
    password: "",
    isLoggedIn: false,
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogOut = () => {
    setState({
      email: "",
      password: "",
      isLoggedIn: false,
    });
    setIsLoggedIn(false);
    localStorage.clear();
    props.history.push('/');
  };

  const handleInput = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/signup", {
        email: state.email,
        password: state.password,
      });
      console.log(response);
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
      props.history.push('/restaurants');

    } catch (err) {
      console.log(err);
    }
  };


  const handleLogIn = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email: state.email,
        password: state.password,
      });
      localStorage.token = response.data.token;
      setIsLoggedIn(true);
      props.history.push('/restaurants');
    } catch (error) {
      console.log(error);
      let userChoice;
      userChoice = prompt(`Are you already a member (yes) || (no)?`)
      if (userChoice === 'yes'){
          alert('Did you mistype your email?')
      }
      else if (userChoice === 'no'){
          alert(`Oh... Sign up then!`);
          props.history.push('/signup');
      }
    }
  };
  return (

    <div>
      <NavBar isLoggedIn={isLoggedIn} />
      <div className="body">
        <Switch>
          <Route
            path="/signup"
            render={(props) => {
              return (
                <SignUpForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleSignUp={handleSignUp}
                />
              );
            }}
          />
          <Route
            path="/logout"
            render={(props) => {
              return (
                <LogOut 
                isLoggedIn={isLoggedIn} 
                handleLogOut={handleLogOut} 
                />
                
              );
            }}
          />
          <Route
            path="/login"
            render={(props) => {
              return (
                <LogInForm
                  isLoggedIn={isLoggedIn}
                  handleInput={handleInput}
                  handleLogIn={handleLogIn}
                />
              );
            }}
          />
          <Route
            path="/restaurants"
            render={(props) => {
              return (
              <RestaurantList isLoggedIn={isLoggedIn} />
              )

            }}
          />
        </Switch>
      </div>

    </div>
  );
};
export default withRouter(App);
