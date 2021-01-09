import React from "react";
import { loginUrl } from "../util/spotify.js";
import "../css/Login.css";

function Login() {
  return (
    <div className="login">
      <img alt="totify logo" src="/totify-login.jpg" />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  );
}

export default Login;
