import React from "react";
import {FetchSongsByRecord} from "../../api-functions/songs-api";
import SongCard from "../cards/SongCard";
import {LoadingComponent} from "../MicroComponents/MicroComponents";
import Song, {SongOnClick} from "./SongItem";

const SongsByRecordList = ({recordId}) => {
    const songs = FetchSongsByRecord(recordId);
    return (
            <div className="row">
                {songs.map((song) =>
                    <SongCard id={song.id} key={song.id} recordId={recordId} reverse linked={false}/>
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
                    <Song id={song.id}/>
                </li>
            )}
        </ol>)
        : (<LoadingComponent text="No tracks available at this time." icon="spinner" spinning={true}/>)
};

const SongsByRecordListSimpleDynamic = ({recordId, currentSong, setCurrentSongOnClick}) => {
    const songs = FetchSongsByRecord(recordId);
    return songs.length
        ? (
            <ul className="list-unstyled mb-3 mb-sm-0 mb-lg-3">
                {songs.map((song) =>
                    <li className="mb-1" key={song.index}>
                        <SongOnClick id={song.id} setCurrentSong={setCurrentSongOnClick} currentSong={currentSong}/>
                    </li>
                )}
            </ul>)
        : (<LoadingComponent text="No tracks available at this time." icon="spinner" spinning={true}/>)
};

export default SongsByRecordList;
export {SongsByRecordListSimple, SongsByRecordListSimpleDynamic};
