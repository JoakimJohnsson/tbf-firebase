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

const ClickableTrackListItem = ({id, setCurrentSong, currentSong}) => {
    const song = FetchSongFromId(id);
    const [activeSongId, setActiveSongId] = useState("");

    return (
        <li className={activeSongId === currentSong ? "play-tracks__li active" : "play-tracks__li"}>

            <p className="text-capitalize text-left p-2 mr-3 mb-0 flex-grow-1" onClick={() => {
                setCurrentSong(id)
                setActiveSongId(id)
            }}>{song.name}</p>
            <div className="d-flex align-items-center justify-content-end">
            <button className="play-tracks__button play mr-3"
                    onClick={() => {
                        setCurrentSong(id)
                        setActiveSongId(id)
                    }}>
                <span className="text-uppercase small mr-2 d-none d-sm-inline">PLAY</span>
                <FontAwesomeIcon icon={"play-circle"}/>
            </button>
            <a className="play-tracks__button download" href={song.url} download={song.name}
                   >
                <span className="text-uppercase small mr-2 d-none d-sm-inline">Download</span>
                <FontAwesomeIcon icon={"arrow-alt-circle-down"}/>
            </a>
            </div>

        </li>
    )
};

export default Song;
export {ClickableTrackListItem};
