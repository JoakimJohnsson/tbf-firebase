import React, {useContext} from 'react';
import {ArtistLinkAndTrackName} from "../apiComponents/ArtistComponents";
import {FetchTrackFromId} from "../../api-functions/api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Context} from "../MusicStore/MusicStore";
import {GlobalTrackContext} from "../MusicStore/GlobalTrackStore";

const TrackPlayer = () => {
    const [trackState] = useContext(Context);
    return (
        <div className="track-card-dynamic__wrapper">
            {trackState.currentTrack ?
                <TrackPlayerContent />
                :
                ""
            }
        </div>
    )
};

const TrackPlayerContent = () => {
    const [trackState, setTrackState] = useContext(Context);
    const track = FetchTrackFromId(trackState.currentTrack);

    let globalTrackList = useContext(GlobalTrackContext);
    globalTrackList = globalTrackList[0];

    let trackIndex = globalTrackList.indexOf(globalTrackList.find(e => e.id === track.id));

    console.log("trackIndex");
    console.log(trackIndex);

    return track && track.artistId ?
        (<div className="track-card-dynamic">
            <div className="p-3 text-center">

                <button className="btn btn-fa__primary mr-3" aria-label="Previous Song"
                        onClick={() => {
                            setTrackState({
                                currentTrack: globalTrackList[trackIndex - 1].id
                            })
                        }}>
                    <FontAwesomeIcon icon={"chevron-left"} size={"2x"}/>
                </button>

                <span className="track-card-dynamic__info px-3 py-1 mr-2"><ArtistLinkAndTrackName id={track.artistId} trackName={track.name}/></span>

                <button className="btn btn-fa__primary mx-3" aria-label="Next Song"
                        onClick={() => {
                            setTrackState({
                                currentTrack: globalTrackList[trackIndex + 1].id
                            })
                        }}>
                    <FontAwesomeIcon icon={"chevron-right"} size={"2x"}/>
                </button>

                <button className="btn btn-fa__primary" aria-label="Close song"
                        onClick={() => {
                            setTrackState({
                                currentTrack: null
                            })
                        }}>
                    <FontAwesomeIcon icon={"times"}/>
                </button>



            </div>
            <div className="px-3 px-md-5 pb-3 text-center">
                <audio controls autoPlay={true}>
                    <source src={track.url} type="audio/mpeg"/>
                    <p>
                        Your browser doesn't support HTML5 audio.
                    </p>
                </audio>
            </div>
        </div>)
        :
        ""
}

export default TrackPlayer;
