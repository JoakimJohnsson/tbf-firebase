import React from "react";
import {FetchSongsByRecord} from "../../../../api-functions/Songs";

const SongsByRecordList = (props) => {
    const songs = FetchSongsByRecord(props.recordId);
    return (
        <ul className="list-unstyled">
            {songs.map((song) =>
                <li key={song.id}>
                    {song.id}
                </li>
            )}
        </ul>
    )
};

export default SongsByRecordList;
