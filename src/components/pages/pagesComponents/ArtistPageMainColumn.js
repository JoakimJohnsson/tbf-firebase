import React, {useState} from "react";
import {CopyrightInformation} from "../../MicroComponents/MicroComponents";
import RecordsByArtist from "../../lists/RecordsByArtist";
import TrackPlayer from "../../cards/TrackPlayer";
import {TracksByArtistWithPlayer} from "../../lists/TracksByArtist";

const ArtistPageMainColumn = ({id}) => {

    const [currentTrack, setCurrentTrack] = useState(null);
    const setCurrentTrackOnClick = (songId) => {
        setCurrentTrack(songId);
    }
    const destroyCurrentTrack = () => {
        setCurrentTrack(null);
    }

    return (
        <div className="standard-main-column">
            <div className="standard-main-column__section">
                <h2 className="section-header">Records</h2>
                <RecordsByArtist artistId={id}/>
                <h2 className="section-header">Tracks</h2>
                <TracksByArtistWithPlayer artistId={id} currentTrack={currentTrack} setCurrentTrackOnClick={setCurrentTrackOnClick}/>
                {currentTrack ? <TrackPlayer id={currentTrack} key={currentTrack} destroyCurrentTrack={destroyCurrentTrack}/> : false}
            </div>
            <CopyrightInformation className={"d-block d-lg-none mt-5"}/>
        </div>
    )
}

export default ArtistPageMainColumn
