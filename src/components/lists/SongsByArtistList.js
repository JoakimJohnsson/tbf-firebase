import React from "react";
import {FetchSongsByArtist} from "../../api-functions/songs-api";
import SongCard from "../cards/SongCard";

const SongsByArtistList = ({artistId}) => {
    const songs = FetchSongsByArtist(artistId);
    return (
            <div className="row">
                {songs.map((song) =>
                    <SongCard id={song.id} fullwidth={false} key={song.id} recordId={song.recordId} reverse/>
                )}
            </div>
    )
};

export default SongsByArtistList;
