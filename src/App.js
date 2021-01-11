import Login from "./components/Login";
import Player from "./components/Player";
import { useDataContext } from "./components/DataLayer";

import SpotifyWebApi from "spotify-web-api-js";
import { getToken } from "./util/spotify";
import { useEffect } from "react";
import "./css/App.css";
require("dotenv").config();

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataContext();

  useEffect(() => {
    const _token = getToken();
    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({ type: "SET_USER", user: user });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: "SET_PLAYLISTS", playlists: playlists });
      });
    }
    window.location.hash = "";
  }, [dispatch]);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
