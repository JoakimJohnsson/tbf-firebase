import React from "react";
import {FetchSongsByRecord} from "../../api-functions/songs-api";
import SongCard from "../cards/SongCard";
import Person from "./PersonItem";
import {LoadingComponent} from "../MicroComponents/MicroComponents";
import Song from "./SongItem";

const SongsByRecordList = ({recordId}) => {
    const songs = FetchSongsByRecord(recordId);
    return (
            <div className="row">
                {songs.map((song) =>
                    <SongCard id={song.id} key={song.id} recordId={recordId} reverse/>
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
                <li className="" key={song.index}>
                    <Song id={song.id}/>
                </li>
            )}
        </ol>)
        : (<LoadingComponent text="No members available at this time." icon="spinner" spinning={true}/>)
};

export default SongsByRecordList;
export {SongsByRecordListSimple};
