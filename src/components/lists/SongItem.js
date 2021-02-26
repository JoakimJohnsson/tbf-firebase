import React, {useState} from "react";
import {FetchSongFromId} from "../../api-functions/songs-api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FetchRecordFromId} from "../../api-functions/records-api";
import imgUnavailable from "../../images/image_unavailable.png";

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

            <p className="play-tracks__text pl-2 mr-3 mb-0 flex-grow-1" onClick={() => {
                setCurrentSong(id)
                setActiveSongId(id)
            }}>{song.name}</p>
            <div className="d-flex align-items-center justify-content-end p-2">
                <button className="play-tracks__button play mr-3"
                        onClick={() => {
                            setCurrentSong(id)
                            setActiveSongId(id)
                        }}>
                    <span className="play-tracks__button-text">PLAY</span>
                    <FontAwesomeIcon icon={"play-circle"}/>
                </button>
                <a className="play-tracks__button download" href={song.url} download={song.name}
                >
                    <span className="play-tracks__button-text">Download</span>
                    <FontAwesomeIcon icon={"arrow-alt-circle-down"}/>
                </a>
            </div>

        </li>
    )
};

const ClickableTrackListItemWithImage = ({id, setCurrentSong, currentSong}) => {
    const song = FetchSongFromId(id);
    const [activeSongId, setActiveSongId] = useState("");

    return (
        <li className={activeSongId === currentSong ? "play-tracks__li active" : "play-tracks__li"}>

            <TrackListImage song={song}/>

            <p className="play-tracks__text mr-3 mb-0 flex-grow-1" onClick={() => {
                setCurrentSong(id)
                setActiveSongId(id)
            }}>{song.name}</p>
            <div className="d-flex align-items-center justify-content-end p-2">
                <button className="play-tracks__button play mr-3"
                        onClick={() => {
                            setCurrentSong(id)
                            setActiveSongId(id)
                        }}>
                    <span className="play-tracks__button-text">PLAY</span>
                    <FontAwesomeIcon icon={"play-circle"}/>
                </button>
                <a className="play-tracks__button download" href={song.url} download={song.name}
                >
                    <span className="play-tracks__button-text">Download</span>
                    <FontAwesomeIcon icon={"arrow-alt-circle-down"}/>
                </a>
            </div>

        </li>
    )
};

const TrackListImage = ({song}) => {
    let coverUrl = "";
    if (song.recordId) {
        coverUrl = FetchRecordFromId(song.recordId).coverUrl;
    }
    return coverUrl !== "" ? (
            <img className="play-tracks__image mr-2" alt={`Cover for ${song.name}`} src={coverUrl || imgUnavailable}/>
        )
        :
        <img className="play-tracks__image mr-2" alt={`Cover for ${song.name}`} src={imgUnavailable}/>
}

export default Song;
export {ClickableTrackListItem, ClickableTrackListItemWithImage};
