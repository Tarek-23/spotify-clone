const api_url = "https://accounts.spotify.com/authorize";

const client_id = process.env.REACT_APP_CLIENT_ID;

const redirect_uri = "http://localhost:3000";

const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
];

export const loginUrl = `${api_url}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getToken = () => {
  return window.location.hash.split("&")[0].substr("14");
};
