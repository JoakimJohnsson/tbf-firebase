import React from "react";
import {FetchSongFromId} from "../../../../api-functions/Songs";

const Song = (props) => {
    const song = FetchSongFromId(props.id);
    return <span className="text-capitalize">{song.name}</span>
};

export default Song;
