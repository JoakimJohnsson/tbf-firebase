import React from "react";
import {FetchSongsByRecord} from "../../../api-functions/songs-api";
import Song from "../single/SongItem";

const SongsByRecordList = (props) => {
    const songs = FetchSongsByRecord(props.recordId);
    return (
        <ul className="list-unstyled">
            {songs.map((song) =>
                <li key={song.id}>
                    <Song id={song.id}/>
                </li>
            )}
        </ul>
    )
};

export default SongsByRecordList;
