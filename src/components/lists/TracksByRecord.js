import React from "react";
import {FetchTracksByRecord} from "../../api-functions/tracks-api";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import Track, {TracksPlayerListItemWithImage} from "../apiComponents/TrackComponents";

const TracksByRecordListSimple = ({recordId}) => {
    const tracks = FetchTracksByRecord(recordId);
    return tracks.length ?
        (<ol className="list-group mb-3 mb-sm-0 mb-lg-3">
            {tracks.map((track) =>
                <li key={track.index}>
                    <Track id={track.id}/>
                </li>
            )}
        </ol>)
        :
        (<LoadingStandard text="No tracks available at this time." icon="spinner" spinning={true}/>)
};

const TracksByRecordWithPlayer = ({recordId, currentTrack, setCurrentTrackOnClick}) => {
    const tracks = FetchTracksByRecord(recordId);
    return tracks.length ?
        (<ul className="tracks-player__list">
            {tracks.map((track) =>
                <TracksPlayerListItemWithImage key={track.index} id={track.id} setCurrentTrack={setCurrentTrackOnClick} currentTrack={currentTrack}/>
            )}
        </ul>)
        :
        (<LoadingStandard text="No tracks available at this time." icon="spinner" spinning={true}/>)
};

const TracksByRecordWithPlayerWithImage = ({recordId, currentTrack, setCurrentTrackOnClick}) => {
    const tracks = FetchTracksByRecord(recordId);
    return tracks.length ?
        (<ul className="tracks-player__list">
            {tracks.map((track) =>
                <TracksPlayerListItemWithImage key={track.index} id={track.id} setCurrentTrack={setCurrentTrackOnClick} currentTrack={currentTrack}/>
            )}
        </ul>)
        :
        (<LoadingStandard text="No tracks available at this time." icon="spinner" spinning={true}/>)
};

export default TracksByRecordListSimple;
export {TracksByRecordWithPlayer, TracksByRecordWithPlayerWithImage};
