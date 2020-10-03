import React from "react";
import FetchAllRecords from "../../api-functions/Records";
import { FetchSongsByRecord } from "../../api-functions/Songs";

const RecordList = () => {
    const records = FetchAllRecords();
    return (
        <ul>
            {records.map((record) =>
                <li key={record.id}>
                    {record.name}
                    <SongList recordId={record.id}/>
                </li>
            )}
        </ul>
    )
};

const SongList = (props) => {
    const songs = FetchSongsByRecord(props.recordId);
    return (
        <ul>
            {songs.map((song) =>
                <li key={song.id}>
                    {song.id}
                </li>
            )}
        </ul>
    )
};

export default RecordList;