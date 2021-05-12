import React, {useState, useEffect, useRef, useContext} from "react";
import AudioControls from "./AudioControls";
import {Context} from "../MusicStore/MusicStore";
import {GlobalTrackContext} from "../MusicStore/GlobalTrackStore";

const AudioPlayer = ({ track }) => {
    // State
    const [trackState, setTrackState] = useContext(Context);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    let globalTrackList = useContext(GlobalTrackContext);
    globalTrackList = globalTrackList[0];
    let listLength = globalTrackList.length;
    let trackIndex = globalTrackList.indexOf(globalTrackList.find(e => e.id === track.id));
    
    // Refs
    const audioRef = useRef(new Audio(track.url));
    const intervalRef = useRef();
    const isReady = useRef(false);

    // Destructure for conciseness
    const { duration } = audioRef.current;

    const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : "0%";

    const progressStartColor = isPlaying ? "#458d6e" : "#919048";
    const progressStopColor = isPlaying ? "#88ffcc" : "#fffe88";

    const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${progressStartColor}), color-stop(${currentPercentage}, ${progressStopColor}))
  `;

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    const onScrub = (value) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    };

    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    };

    const toPrevTrack = () => {
        if (trackIndex > 0) {
            setTrackState({
                currentTrack: globalTrackList[trackIndex - 1].id
            })
            console.log("TrackState: ", trackState);
        }

    };

    const toNextTrack = () => {
        if (trackIndex < listLength - 1) {
            setTrackState({
                currentTrack: globalTrackList[trackIndex + 1].id
            })
            console.log("TrackState: ", trackState);
        }
    };

    useEffect(() => {
        if (isPlaying) {
            console.log("isPlaying", isPlaying);
            audioRef.current.play();
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // Handles cleanup and setup when changing tracks
    useEffect(() => {
        audioRef.current.pause();

        console.log("Im here now ");

        audioRef.current = new Audio(track.url);
        setTrackProgress(audioRef.current.currentTime);

        if (audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex, track.url]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="track-card__audio">
            <div className="track-info">

                <AudioControls
                    isPlaying={isPlaying}
                    onPrevClick={toPrevTrack}
                    onNextClick={toNextTrack}
                    onPlayPauseClick={setIsPlaying}
                />
                <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className={isPlaying ? "track-info__progress is-playing" : "track-info__progress is-paused"}
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    style={{ background: trackStyling }}
                />
            </div>
        </div>
    );
};

export default AudioPlayer;
