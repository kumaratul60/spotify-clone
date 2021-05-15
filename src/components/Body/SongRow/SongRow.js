import React from "react";
import { useDataLayerValue } from "../../../DataLayer";
import "./SongRow.css";

function SongRow({ track }) {
  console.log(track);
  //   const [{play_uri},dispatch] = useDataLayerValue();

  //   function handleClick(){

  //      dispatch(
  //           {
  //               type:'SET_PLAY_URI',
  //               play_uri:track.uri,
  //           }
  //       )
  //       dispatch({
  //           type: "SET_PLAYING",
  //           playing: true,
  //         })

  //       if (play_uri )
  //       console.log("👍")
  //   }

  //   onClick={handleClick}

  return (
    <div className="songRow">
      <img src={track.album.images[0].url} alt="" className="songRow__album" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
