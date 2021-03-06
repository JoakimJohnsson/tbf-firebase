import React from "react";
import {FetchTracksByArtist} from "../../api-functions/api";
import TrackCard from "../cards/TrackCard";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import {TracksPlayerListItemWithImage} from "../apiComponents/TrackComponents";

const TracksByArtist = ({artistId}) => {
    const tracks = FetchTracksByArtist(artistId);

    return tracks.length ?
        (<div className="row">
            {tracks.map((track) =>
                <TrackCard id={track.id} key={track.id} recordId={track.recordId} reverse linked={false}/>
            )}
        </div>)
        :
        (<LoadingStandard spinning={true} text={"No tracks available"} />)
};

const TracksByArtistWithPlayer = ({artistId, currentTrack, setCurrentTrackOnClick}) => {
    const tracks = FetchTracksByArtist(artistId);
    return tracks.length ?
        (<ul className="tracks-player__list">
            {tracks.map((track) =>
                <TracksPlayerListItemWithImage key={track.id} id={track.id} setCurrentTrack={setCurrentTrackOnClick} currentTrack={currentTrack}/>
            )}
        </ul>)
        :
        (<LoadingStandard text="No tracks available at this time." icon="spinner" spinning={true}/>)
};

export default TracksByArtist;
export {TracksByArtistWithPlayer}
