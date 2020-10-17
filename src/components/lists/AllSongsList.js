import React from "react";
import FetchAllSongs from "../../api-functions/songs-api";
import {LoadingComponent} from "../MicroComponents/MicroComponents";
import SongCard from "../cards/SongCard";

const AllSongsList = () => {
    const songs = FetchAllSongs();
    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <SongCard id={song.id} key={song.id} recordId={song.recordId} linked/>
            )}
        </div>)
        :
        (<LoadingComponent spinning={true}/>)
};

export default AllSongsList;
