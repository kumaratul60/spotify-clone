import React from "react";
import { useDataLayerValue } from "../../DataLayer";
import Header from "../Header/Header";
import "./Body.css";
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "./SongRow/SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  console.log(discover_weekly)

  // const playPlaylist = () => {
  //   dispatch({
  //     type: "SET_PLAYING",
  //     playing: true,
  //   });
  //   dispatch({
  //     type: "SET_PLAY_URI",
  //     play_uri: "spotify:playlist:37i9dQZEVXcIdICMRECAXa",
  //   });
  //   spotify.getMyCurrentPlayingTrack().then((r) => {
  //     dispatch({
  //       type: "SET_ITEM",
  //       item: r.item,
  //     });
  //   });
  // };

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
        </div>
        {/* List of songs */}
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow key={item.track.name} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
