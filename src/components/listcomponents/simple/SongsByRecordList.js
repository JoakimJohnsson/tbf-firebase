import React from "react";
import {FetchSongsByRecord} from "../../../api-functions/songs-api";
import Song from "../single/SongItem";
import SongCard from "../../cardcomponents/simple/SongCard";

const SongsByRecordList = (props) => {
    const songs = FetchSongsByRecord(props.recordId);
    return (


            <div>
                {songs.map((song) =>
                    <SongCard id={song.id}/>
                )}
            </div>
    )
};

export default SongsByRecordList;
