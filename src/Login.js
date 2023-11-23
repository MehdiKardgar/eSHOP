import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { auth } from "./firebase";

function Login() {
  const history = useHistory(); // React hook to manage browser history
  const [email, setEmail] = useState(""); // State for email input field
  const [password, setPassword] = useState(""); // State for password input field

  // Function to sign in the user
  const signIn = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    auth
      .signInWithEmailAndPassword(email, password) // Signs in user with email and password
      .then((auth) => {
        history.push("/"); // Redirects to the home page after successful sign-in
      })
      .catch((error) => alert(error.message)); // Displays error message in case of failure
  };

  // Function to register a new user
  const register = (e) => {
    e.preventDefault(); // Prevents default form submission behavior

    auth
      .createUserWithEmailAndPassword(email, password) // Creates a new user with email and password
      .then((auth) => {
        if (auth) {
          history.push("/"); // Redirects to the home page after successful registration
        }
      })
      .catch((error) => alert(error.message)); // Displays error message in case of failure
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        {/* Logo and title of the application */}
        <div className="login__logo">
          <StorefrontIcon className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eSHOP</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          {/* Input fields for email and password */}
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Button to sign in */}
          <button
            type="submit"
            className="login__signInButton"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        {/* Agreement and registration button */}
        <p>
          By signing-in you agree to the eShop Website Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>

        {/* Button to create a new eShop account */}
        <button className="login__registerButton" onClick={register}>
          Create your eShop Account
        </button>
      </div>
    </div>
  );
}

export default Login;
