import React from "react";
import {FetchTracksByRecord} from "../../api-functions/tracks-api";
import LoadingStandard from "../microComponents/LoadingStandard";
import Track, {TracksPlayerListItemWithImage} from "../apiComponents/TrackComponents";

const SongsByRecordListSimple = ({recordId}) => {
    const songs = FetchTracksByRecord(recordId);
    return songs.length ?
        (<ol className="list-group mb-3 mb-sm-0 mb-lg-3">
            {songs.map((song) =>
                <li key={song.index}>
                    <Track id={song.id}/>
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

export default SongsByRecordListSimple;
export {TracksByRecordWithPlayer, TracksByRecordWithPlayerWithImage};
