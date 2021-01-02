import Login from "./components/Login";
import Home from "./components/Home";
import { getToken } from "./spotify";
import { useState, useEffect } from "react";
import "./css/App.css";
require("dotenv").config();

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const _token = getToken();
    if (_token) setToken(_token);
    window.location.hash = "";
  }, []);

  return <div className="app">{token ? <Home /> : <Login />}</div>;
}

export default App;
