import React from "react";
import {FetchSongsByArtist} from "../../api-functions/tracks-api";
import TrackCard from "../cards/TrackCard";
import {LoadingComponentStandard} from "../MicroComponents/MicroComponents";

const TracksByArtistList = ({artistId}) => {
    const songs = FetchSongsByArtist(artistId);

    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <TrackCard id={song.id} key={song.id} recordId={song.recordId} reverse linked={false}/>
            )}
        </div>)
        :
        (<LoadingComponentStandard spinning={true} text={"No tracks available"} />)
};

export default TracksByArtistList;
