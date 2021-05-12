import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AudioControls = ({
                           isPlaying,
                           onPlayPauseClick,
                           onPrevClick,
                           onNextClick
                       }) => (
    <div className="audio-controls">
        <button
            type="button"
            className="btn btn-fa__primary mx-4 p-2"
            aria-label="Previous"
            onClick={onPrevClick}
        >
            <FontAwesomeIcon icon={"step-backward"} size={"1x"}/>
        </button>
        {isPlaying ? (
            <button
                type="button"
                className="btn btn-fa__tertiary mx-4 p-2"
                onClick={() => onPlayPauseClick(false)}
                aria-label="Pause"
            >
                <FontAwesomeIcon icon={"pause"} size={"1x"}/>
            </button>
        ) : (
            <button
                type="button"
                className="btn btn-fa__secondary mx-4 p-2"
                onClick={() => onPlayPauseClick(true)}
                aria-label="Play"
            >
                <FontAwesomeIcon icon={"play"} size={"1x"}/>
            </button>
        )}
        <button
            type="button"
            className="btn btn-fa__primary mx-4 p-2"
            aria-label="Next"
            onClick={onNextClick}
        >
            <FontAwesomeIcon icon={"step-forward"} size={"1x"}/>
        </button>
    </div>
);

export default AudioControls;
