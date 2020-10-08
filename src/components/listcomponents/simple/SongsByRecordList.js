import React from "react";
import {FetchSongsByRecord} from "../../../api-functions/songs-api";
import SongCard from "../../cardcomponents/simple/SongCard";

const SongsByRecordList = ({recordId}) => {
    const songs = FetchSongsByRecord(recordId);
    return (
            <div>
                {songs.map((song) =>
                    <SongCard id={song.id} key={song.id} recordId={recordId}/>
                )}
            </div>
    )
};

export default SongsByRecordList;
