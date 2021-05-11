import React, {useContext, useState} from 'react';
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
                <TrackPlayerContent/>
                :
                ""
            }
        </div>
    )
};

const TrackPlayerContent = () => {
    const [trackState, setTrackState] = useContext(Context);
    const [playing, setPlaying] = useState(true);
    const track = FetchTrackFromId(trackState.currentTrack);
    let globalTrackList = useContext(GlobalTrackContext);
    globalTrackList = globalTrackList[0];
    let listLength = globalTrackList.length;
    let trackIndex = globalTrackList.indexOf(globalTrackList.find(e => e.id === track.id));

    const playAudio = () => {
        const tbfAudioPlayer = document.getElementsByClassName("tbf-audio-player")[0];
        tbfAudioPlayer.play();
        setPlaying(true)
    }

    const pauseAudio = () => {
        const tbfAudioPlayer = document.getElementsByClassName("tbf-audio-player")[0];
        tbfAudioPlayer.pause();
        setPlaying(false)
    }

    const loadPreviousTrack = () => {
        if (trackIndex > 0) {
            setTrackState({
                currentTrack: globalTrackList[trackIndex - 1].id
            })
        }
    }

    const loadNextTrack = () => {
        if (trackIndex < listLength - 1) {
            setTrackState({
                currentTrack: globalTrackList[trackIndex + 1].id
            })
        }
    }

    return track && track.artistId ?
        (<div className="track-card-dynamic">
            <div className="p-3 text-center">
                <div className="track-card-dynamic__info px-3 py-1 mr-2">
                    <ArtistLinkAndTrackName id={track.artistId} trackName={track.name}/>
                    <button className="btn btn-fa__primary py-1 pl-3" aria-label="Close song"
                            onClick={() => {
                                setTrackState({
                                    currentTrack: null
                                })
                            }}>
                        <FontAwesomeIcon icon={"times"}/>
                    </button>
                </div>

            </div>
            <div className="text-center">
                <button className="btn btn-fa__primary mx-4 p-2" aria-label="Previous Song"
                        onClick={() => {
                            loadPreviousTrack();
                        }}>
                    <FontAwesomeIcon icon={"step-backward"} size={"2x"}/>
                </button>

                {playing ?

                    <button className="btn btn-fa__primary mx-4 p-2" aria-label="Next Song"
                            onClick={pauseAudio}>
                        <FontAwesomeIcon icon={"pause"} size={"2x"}/>
                    </button>

                    :
                    <button className="btn btn-fa__primary mx-4 p-2" aria-label="Next Song"
                            onClick={playAudio}>
                        <FontAwesomeIcon icon={"play"} size={"2x"}/>
                    </button>
                }
                <button className="btn btn-fa__primary mx-4 p-2" aria-label="Next Song"
                        onClick={() => {
                            loadNextTrack();
                        }}>
                    <FontAwesomeIcon icon={"step-forward"} size={"2x"}/>
                </button>


            </div>

            <div className="px-3 px-md-5 pb-3 text-center">
                <audio className="tbf-audio-player" autoPlay={true}>
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
