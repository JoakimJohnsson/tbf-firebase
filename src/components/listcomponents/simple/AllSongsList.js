import React from "react";
import FetchAllSongs from "../../../api-functions/songs-api";
import {LoadingComponent} from "../../MicroComponents/MicroComponents";
import SongCard from "../../cardcomponents/simple/SongCard";

const AllSongsList = ({columnClass}) => {
    const songs = FetchAllSongs();
    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <SongCard id={song.id} columnClass={columnClass} key={song.id} recordId={song.recordId}/>
            )}
        </div>)
        :
        (<LoadingComponent/>)
};

export default AllSongsList;
