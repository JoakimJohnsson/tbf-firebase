import React from "react";
import {FetchSongsByRecord} from "../../api-functions/songs-api";
import SongCard from "../cards/SongCard";

const SongsByRecordList = ({recordId}) => {
    const songs = FetchSongsByRecord(recordId);
    return (
            <div className="row">
                {songs.map((song) =>
                    <SongCard id={song.id} key={song.id} recordId={recordId}/>
                )}
            </div>
    )
};

export default SongsByRecordList;
