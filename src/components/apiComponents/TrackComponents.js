import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FetchRecordFromId, FetchTrackFromId} from "../../api-functions/api";
import imgUnavailable from "../../images/image_unavailable.png";
import Artist from "./ArtistComponents";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import {Context} from "../MusicStore/MusicStore";

const Track = ({id}) => {
    const track = FetchTrackFromId(id);
    return (
        <div className="mb-1">
            <span className="text-capitalize">{track.name}</span>
        </div>
    )
};

const TracksPlayerListItemWithImage = ({id}) => {
    const [trackState, setTrackState] = useContext(Context)
    const track = FetchTrackFromId(id);
    const updateState = () => {
        setTrackState({
            currentTrack: id
        })
    }

    return track && track.artistId ? (
            <li className={id === trackState.currentTrack ? "tracks-player_li active" : "tracks-player_li"}>
                <TracksPlayerImage track={track} className={"mr-2"}/>
                <div className="tracks-player__text mr-3 mb-0 flex-grow-1"
                     onClick={() => {
                         updateState()
                     }}>
                    <p className="d-flex flex-column justify-content-center m-0 flex-md-row justify-content-md-start">
                        <span className="text-uppercase"><Artist id={track.artistId} /></span>
                        <span className="d-none d-md-inline"> &nbsp; - &nbsp;</span> <span>{track.name}</span>
                    </p>
                </div>

                <div className="d-flex align-items-center justify-content-end p-2">
                    <button className="tracks-player__button play mr-3"
                            onClick={() => {
                                updateState()
                            }}>
                        <span className="tracks-player__button-text">PLAY</span>
                        <FontAwesomeIcon icon={"play-circle"}/>
                    </button>
                    <a className="tracks-player__button download" href={track.url} download={track.name}>
                        <span className="tracks-player__button-text">Download</span>
                        <FontAwesomeIcon icon={"arrow-alt-circle-down"}/>
                    </a>
                </div>
            </li>
        )
        :
        (<LoadingStandard spinning={true}/>)
};

const TracksPlayerImage = ({track, className}) => {
    let coverUrl = "";
    if (track.recordId) {
        coverUrl = FetchRecordFromId(track.recordId).coverUrl;
    }
    return coverUrl !== "" ?
        <img className={`tracks-player__image ${className}`} alt={`Cover for ${track.name}`} src={coverUrl || imgUnavailable}/>
        :
        <img className={`tracks-player__image ${className}`} alt={`Cover for ${track.name}`} src={imgUnavailable}/>
}

export default Track;
export {TracksPlayerListItemWithImage, TracksPlayerImage};
