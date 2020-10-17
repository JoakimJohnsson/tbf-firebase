import React from "react";
import {FetchSongFromId} from "../../api-functions/songs-api";

const Song = ({id}) => {
    const song = FetchSongFromId(id);
    return (
        <div className="song-item mb-1">
            <span className="text-capitalize">{song.name}</span>
        </div>
    )
};

export default Song;
