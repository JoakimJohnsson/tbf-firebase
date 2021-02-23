import React, {useState} from "react";
import {FetchSongFromId} from "../../api-functions/songs-api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Song = ({id}) => {
    const song = FetchSongFromId(id);
    return (
        <div className="song-item mb-1">
            <span className="text-capitalize">{song.name}</span>
        </div>
    )
};

const SongOnClick = ({id, setCurrentSong, currentSong}) => {
    const song = FetchSongFromId(id);

    const [activeSongId, setActiveSongId] = useState("");


    return (
            <button className={activeSongId === currentSong ? "button__song-picker active" : "button__song-picker"}
                    onClick={() => {
                        setCurrentSong(id)
                        setActiveSongId(id)
                    }}>
                <span className="text-capitalize text-left mr-3">{song.name}</span>
                <FontAwesomeIcon icon={"play-circle"}/>
            </button>
    )
};

export default Song;
export {SongOnClick};
