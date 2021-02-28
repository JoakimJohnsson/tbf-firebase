import React from "react";
import {FetchTracksByArtist} from "../../api-functions/tracks-api";
import TrackCard from "../cards/TrackCard";
import {LoadingStandard} from "../MicroComponents/MicroComponents";

const TracksByArtist = ({artistId}) => {
    const songs = FetchTracksByArtist(artistId);

    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <TrackCard id={song.id} key={song.id} recordId={song.recordId} reverse linked={false}/>
            )}
        </div>)
        :
        (<LoadingStandard spinning={true} text={"No tracks available"} />)
};

export default TracksByArtist;
