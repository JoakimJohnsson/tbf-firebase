import React, {useContext} from 'react';
import {ArtistLinkAndTrackName} from "../apiComponents/ArtistComponents";
import {FetchTrackFromId} from "../../api-functions/api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Context} from "../MusicStore/MusicStore";
import AudioPlayer from "./AudioPlayer";

const TrackPlayer = () => {
    const [trackState] = useContext(Context);
    return (
        <div className="track-card-dynamic__wrapper">
            {trackState.currentTrack ?
                <TrackPlayerContent/>
                :
                ""
            }
        </div>
    )
};

const TrackPlayerContent = () => {
    const [trackState, setTrackState] = useContext(Context);
    const track = FetchTrackFromId(trackState.currentTrack);

    return track && track.artistId ?
        (
            <div className="track-card-dynamic">
            <div className="p-3 text-center">
                <div className="track-card-dynamic__info px-3 py-1">
                    <ArtistLinkAndTrackName id={track.artistId} trackName={track.name}/>
                    <button className="btn btn-fa__primary py-1 pl-3" aria-label="Close song"
                            onClick={() => {
                                setTrackState({
                                    currentTrack: null
                                })
                            }}>
                        <FontAwesomeIcon icon={"times"} />
                    </button>
                </div>

            </div>
                <div className="text-center">
                    <AudioPlayer track={track}/>
                </div>
        </div>)
        :
        ""
}

export default TrackPlayer;
