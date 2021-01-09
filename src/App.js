import Login from "./components/Login";
import Home from "./components/Home";
import { useDataContext } from "./components/DataLayer";

import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from "./util/spotify";
import { useEffect } from "react";
import "./css/App.css";
require("dotenv").config();

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useDataContext();

  useEffect(() => {
    const _token = getToken();
    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });
    }
    window.location.hash = "";
  }, [dispatch]);

  return <div className="app">{token ? <Home /> : <Login />}</div>;
}

export default App;
