import React from "react";
import {FetchSongsByArtist} from "../../api-functions/songs-api";
import SongCard from "../cards/SongCard";
import {LoadingComponent} from "../MicroComponents/MicroComponents";

const SongsByArtistList = ({artistId}) => {
    const songs = FetchSongsByArtist(artistId);

    console.log("songs ", songs);

    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <SongCard id={song.id} key={song.id} recordId={song.recordId} reverse linked={false}/>
            )}
        </div>)
        :
        (<LoadingComponent spinning={true}/>)
};

export default SongsByArtistList;
