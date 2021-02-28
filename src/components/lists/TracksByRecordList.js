import React from "react";
import {FetchSongsByRecord} from "../../api-functions/tracks-api";
import TrackCard from "../cards/TrackCard";
import {LoadingStandard} from "../MicroComponents/MicroComponents";
import Track, {TracksPlayerListItem} from "./TrackItem";

const TracksByRecordList = ({recordId}) => {
    const songs = FetchSongsByRecord(recordId);
    return (
        <div className="row">
            {songs.map((song) =>
                <TrackCard id={song.id} key={song.id} recordId={recordId} reverse linked={false}/>
            )}
        </div>
    )
};

const SongsByRecordListSimple = ({recordId}) => {
    const songs = FetchSongsByRecord(recordId);
    return songs.length
        ? (
            <ol className="list-group mb-3 mb-sm-0 mb-lg-3">
                {songs.map((song) =>
                    <li key={song.index}>
                        <Track id={song.id}/>
                    </li>
                )}
            </ol>)
        : (<LoadingStandard text="No tracks available at this time." icon="spinner" spinning={true}/>)
};

const TracksByRecordWithPlayer = ({recordId, currentTrack, setCurrentTrackOnClick}) => {
    const songs = FetchSongsByRecord(recordId);
    return songs.length
        ? (
            <ul className="tracks-player__list mb-3 mb-sm-0 mb-lg-3">
                {songs.map((song) =>
                    <TracksPlayerListItem key={song.index} id={song.id} setCurrentTrack={setCurrentTrackOnClick} currentTrack={currentTrack}/>
                )}
            </ul>)
        : (<LoadingStandard text="No tracks available at this time." icon="spinner" spinning={true}/>)
};

export default TracksByRecordList;
export {SongsByRecordListSimple, TracksByRecordWithPlayer};
