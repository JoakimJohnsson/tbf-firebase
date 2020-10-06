import React from "react";
import {FetchSongFromId} from "../../../api-functions/songs-api";

const Song = (props) => {
    const song = FetchSongFromId(props.id);
    return <span className="text-capitalize">{song.name}</span>
};

export default Song;
