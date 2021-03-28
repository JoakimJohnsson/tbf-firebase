import React, {useState} from "react";
import {FetchTrackFromId} from "../../api-functions/tracks-api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FetchRecordFromId} from "../../api-functions/records-api";
import imgUnavailable from "../../images/image_unavailable.png";
import {ArtistLink} from "./ArtistComponents";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";

const Track = ({id}) => {
    const track = FetchTrackFromId(id);
    return (
        <div className="song-item mb-1">
            <span className="text-capitalize">{track.name}</span>
        </div>
    )
};

const TracksPlayerListItem = ({id, setCurrentTrack, currentTrack}) => {
    const track = FetchTrackFromId(id);
    const [activeTrackId, setActiveTrackId] = useState("");

    return (
        <li className={activeTrackId === currentTrack ? "tracks-player_li active" : "tracks-player_li"}>
            <p className="tracks-player__text pl-2 mr-3 mb-0 flex-grow-1" onClick={() => {
                setCurrentTrack(id)
                setActiveTrackId(id)
            }}>{track.name}</p>
            <div className="d-flex align-items-center justify-content-end p-2">
                <button className="tracks-player__button play mr-3"
                        onClick={() => {
                            setCurrentTrack(id)
                            setActiveTrackId(id)
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

const TracksPlayerListItemWithImage = ({id, setCurrentTrack, currentTrack}) => {
    const track = FetchTrackFromId(id);
    const [activeTrackId, setActiveTrackId] = useState("");

    return track.artistId ? (
        <li className={activeTrackId === currentTrack ? "tracks-player_li active" : "tracks-player_li"}>

            <TracksPlayerImage track={track}/>

            <p className="tracks-player__text mr-3 mb-0 flex-grow-1" onClick={() => {
                setCurrentTrack(id)
                setActiveTrackId(id)
            }}><ArtistLink id={track.artistId} className={"text-uppercase d-none d-sm-inline"}/><span className="d-none d-sm-inline"> -</span> {track.name}</p>
            <div className="d-flex align-items-center justify-content-end p-2">
                <button className="tracks-player__button play mr-3"
                        onClick={() => {
                            setCurrentTrack(id)
                            setActiveTrackId(id)
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
        :
        (<LoadingStandard/>)
};

const TracksPlayerImage = ({track}) => {
    let coverUrl = "";
    if (track.recordId) {
        coverUrl = FetchRecordFromId(track.recordId).coverUrl;
    }
    return coverUrl !== "" ?
        <img className="tracks-player__image mr-2" alt={`Cover for ${track.name}`} src={coverUrl || imgUnavailable}/>
        :
        <img className="tracks-player__image mr-2" alt={`Cover for ${track.name}`} src={imgUnavailable}/>
}

export default Track;
export {TracksPlayerListItem, TracksPlayerListItemWithImage};
