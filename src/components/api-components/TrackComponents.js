import React, {useState} from "react";
import {FetchTrackFromId} from "../../api-functions/tracks-api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FetchRecordFromId} from "../../api-functions/records-api";
import imgUnavailable from "../../images/image_unavailable.png";

const Track = ({id}) => {
    const song = FetchTrackFromId(id);
    return (
        <div className="song-item mb-1">
            <span className="text-capitalize">{song.name}</span>
        </div>
    )
};

const TracksPlayerListItem = ({id, setCurrentTrack, currentTrack}) => {
    const song = FetchTrackFromId(id);
    const [activeSongId, setActiveSongId] = useState("");

    return (
        <li className={activeSongId === currentTrack ? "tracks-player_li active" : "tracks-player_li"}>

            <p className="tracks-player__text pl-2 mr-3 mb-0 flex-grow-1" onClick={() => {
                setCurrentTrack(id)
                setActiveSongId(id)
            }}>{song.name}</p>
            <div className="d-flex align-items-center justify-content-end p-2">
                <button className="tracks-player__button play mr-3"
                        onClick={() => {
                            setCurrentTrack(id)
                            setActiveSongId(id)
                        }}>
                    <span className="tracks-player__button-text">PLAY</span>
                    <FontAwesomeIcon icon={"play-circle"}/>
                </button>
                <a className="tracks-player__button download" href={song.url} download={song.name}
                >
                    <span className="tracks-player__button-text">Download</span>
                    <FontAwesomeIcon icon={"arrow-alt-circle-down"}/>
                </a>
            </div>

        </li>
    )
};

const TracksPlayerListItemWithImage = ({id, setCurrentTrack, currentTrack}) => {
    const track = FetchTrackFromId(id);
    const [activeSongId, setActiveSongId] = useState("");

    return (
        <li className={activeSongId === currentTrack ? "tracks-player_li active" : "tracks-player_li"}>

            <TracksPlayerImage track={track}/>

            <p className="tracks-player__text mr-3 mb-0 flex-grow-1" onClick={() => {
                setCurrentTrack(id)
                setActiveSongId(id)
            }}>{track.name}</p>
            <div className="d-flex align-items-center justify-content-end p-2">
                <button className="tracks-player__button play mr-3"
                        onClick={() => {
                            setCurrentTrack(id)
                            setActiveSongId(id)
                        }}>
                    <span className="tracks-player__button-text">PLAY</span>
                    <FontAwesomeIcon icon={"play-circle"}/>
                </button>
                <a className="tracks-player__button download" href={track.url} download={track.name}
                >
                    <span className="tracks-player__button-text">Download</span>
                    <FontAwesomeIcon icon={"arrow-alt-circle-down"}/>
                </a>
            </div>

        </li>
    )
};

const TracksPlayerImage = ({track}) => {
    let coverUrl = "";
    if (track.recordId) {
        coverUrl = FetchRecordFromId(track.recordId).coverUrl;
    }
    return coverUrl !== "" ? (
            <img className="tracks-player__image mr-2" alt={`Cover for ${track.name}`} src={coverUrl || imgUnavailable}/>
        )
        :
        <img className="tracks-player__image mr-2" alt={`Cover for ${track.name}`} src={imgUnavailable}/>
}

export default Track;
export {TracksPlayerListItem, TracksPlayerListItemWithImage};
