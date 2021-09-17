import React, { useState, useEffect } from "react";
import axios from "axios";

const initialLoginValues = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [error, setError] = useState("");
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  //replace with error state

  const handleChange = (e) => {
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/api/login", loginValues)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/bubbles");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // useEffect(() => {
  //   return function cleanup(){
  //     setError('')
  //     setLoginValues(initialLoginValues)
  //   }
  // })

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={handleLogin}>
          <label>
            Username:
            <input
              type="text"
              name="username"
              id="username"
              value={loginValues.username}
              onChange={handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              id="password"
              value={loginValues.password}
              onChange={handleChange}
            />
          </label>
          <button id="submit">Login</button>
        </form>
      </div>

      <p id="error" className="error">
        {error}
      </p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state necessary for form functioning.
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to "Lambda" / "School", save that token to localStorage and redirect to a BubblePage route.
//6. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE id="username" and id="password"
//7. MAKE SURE YOUR SUBMIT BUTTON INCLUDES id="submit"
//8. MAKE SURE YOUR ERROR p tag contains the id="error"
