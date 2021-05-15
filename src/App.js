import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import { getAccessToken } from "./components/Spotify/Spotify";
import SpotifyWebApi from "spotify-web-api-js";

import Player from "./components/Player/Player";
import { useDataLayerValue } from "./DataLayer";

//useEffect Hook
/**
 * It runs a piece of code based on a given condition
 * It runs a function given inside it
 * we give [] to specify it to run it only once
 * if we put a variable inside [name,age] the useEffect will run whenever the name var changes.
 */

//Problem: Prop Drilling => Solution: Context API
//Problem: Redux => solution: Reducer, DataLayer or SateProvider

const spotifyOb = new SpotifyWebApi();

function App() {
  //deployed
  //const [token , setToken] = useState(null)
  const [{ user, token }, dispatch] = useDataLayerValue();
  //DataLayer.user is destructured in this
  //state in {} will get everything
  useEffect(() => {
    const hash = getAccessToken();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotifyOb.setAccessToken(_token); //spotify object from spotify WebApi Wrapper which helps us communicate with Spotify app

      spotifyOb.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotifyOb.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });
    }
    spotifyOb.getMyTopArtists().then((response) =>
      dispatch({
        type: "SET_TOP_ARTISTS",
        top_artists: response,
      })
    );

    //enter your own discover weekly playlist id to get your songs
    spotifyOb.getPlaylist("37i9dQZF1DWUVpAXiEPK8P").then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  }, []);

  console.log("🧑‍", user);
  console.log("👽", token);

  return (
    <div className="App">
      {token ? <Player spotify={spotifyOb} /> : <Login />}
    </div>
  );
}

export default App;
