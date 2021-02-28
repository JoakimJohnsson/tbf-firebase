import React from 'react';
import {ArtistLinkAndTrackName} from "../apiComponents/ArtistComponents";
import {FetchTrackFromId} from "../../api-functions/tracks-api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TrackPlayer = ({id, destroyCurrentTrack}) => {
    return (
        <div className="song-card-dynamic__wrapper">
            {id ?
                <TrackPlayerContent id={id} destroyTrack={destroyCurrentTrack}/>
                :
                ""
            }
        </div>
    )
};

const TrackPlayerContent = ({id, destroyTrack}) => {
    const song = FetchTrackFromId(id);
    return song.artistId ?
        (<div className="song-card-dynamic">
            <div className="p-3 text-center">
                <span className="song-card-dynamic__info px-3 py-1 mr-2"><ArtistLinkAndTrackName id={song.artistId} songName={song.name}/></span>
                <button className="btn btn-fa__primary" aria-label="Close song"
                        onClick={() => {
                            destroyTrack()
                        }}>
                    <FontAwesomeIcon icon={"times"}/>
                </button>
            </div>
            <div className="px-3 px-md-5 pb-3 text-center">
                <audio controls autoPlay={true}>
                    <source src={song.url} type="audio/mpeg"/>
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
