import React, {useContext, useState} from 'react';
import {ArtistLinkAndTrackName} from "../apiComponents/ArtistComponents";
import {FetchTrackFromId} from "../../api-functions/api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Context} from "../MusicStore/MusicStore";
import AudioPlayer from "./AudioPlayer";
import {TracksPlayerImage} from "../apiComponents/TrackComponents";

const TrackPlayer = () => {
    const [trackState, setTrackState] = useContext(Context);
    const [minimized, setMinimize] = useState(false);
    const track = FetchTrackFromId(trackState.currentTrack);

    return track && track.artistId ?
        (
            <div className="track-card-dynamic__wrapper w-100 text-center flex-column">


                <div className="track-card-dynamic">

                    {!minimized ?
                        <>
                            <button className="btn btn-fa__primary pt-3 px-3" aria-label="Close song"
                                    onClick={() => {
                                        setTrackState({
                                            currentTrack: null
                                        })
                                    }}>
                                <FontAwesomeIcon icon={"times"} size={"2x"}/>
                            </button>
                            <button className="btn btn-fa__primary pt-3 px-3" aria-label="Minimize song"
                                    onClick={() => {
                                        !minimized ? setMinimize(true) : setMinimize(false)
                                    }}>
                                <FontAwesomeIcon icon={!minimized ? "chevron-down" : "chevron-up"} size={"2x"}/>
                            </button>
                        </>
                        :
                        false
                    }
                    <div className="p-3 text-center">
                        {!minimized ?
                            <div className="col-12 col-sm-6 col-lg-4 p-0 ml-auto mr-auto">
                                <TracksPlayerImage track={track} className={"track-card-dynamic__image"}/>
                            </div>
                            :
                            false}
                        <div className={!minimized ? "track-card-dynamic__info px-3 py-1" : "track-card-dynamic__info px-3 small"}>
                            <ArtistLinkAndTrackName id={track.artistId} trackName={track.name}/>
                            {minimized ?
                                <button className="btn btn-fa__primary py-2 px-3 bg-dark" aria-label="Minimize song"
                                        onClick={() => {
                                            !minimized ? setMinimize(true) : setMinimize(false)
                                        }}>
                                    <FontAwesomeIcon icon={!minimized ? "chevron-down" : "chevron-up"}/>
                                </button>
                            :
                                false
                            }
                        </div>
                    </div>
                    <div className={!minimized ? "text-center" : "text-center minimized"}>
                        <AudioPlayer track={track}/>
                    </div>
                </div>
            </div>)
        :
        ""
}

export default TrackPlayer;
