import React from "react";
import FetchAllSongs from "../../../../api-functions/Songs";
import {LoadingComponent} from "../../../MicroComponents";
import SongCard from "../../../cardcomponents/simple/SongCard";

const AllSongsList = () => {
    const songs = FetchAllSongs();
    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <SongCard id={song.id} name={song.name} url={song.url} index={song.index} artistId={song.artistId}/>
            )}
        </div>)
        :
        (<LoadingComponent/>)
};

export default AllSongsList;
