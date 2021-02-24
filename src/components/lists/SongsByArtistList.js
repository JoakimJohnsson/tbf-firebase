import React from "react";
import {FetchSongsByArtist} from "../../api-functions/songs-api";
import SongCard from "../cards/SongCard";
import {LoadingComponentStandard} from "../MicroComponents/MicroComponents";

const SongsByArtistList = ({artistId}) => {
    const songs = FetchSongsByArtist(artistId);

    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <SongCard id={song.id} key={song.id} recordId={song.recordId} reverse linked={false}/>
            )}
        </div>)
        :
        (<LoadingComponentStandard spinning={true} text={"No tracks available"} />)
};

export default SongsByArtistList;
