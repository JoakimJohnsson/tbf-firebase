import React from "react";
import {CopyrightInformation} from "../../MicroComponents/MicroComponents";
import RecordsByArtist from "../../lists/RecordsByArtist";
import TracksByArtist from "../../lists/TracksByArtist";

const ArtistPageMainColumn = ({id}) => {
    return (
        <div className="standard-main-column">
            <div className="standard-main-column__section">
                <h2 className="section-header">Records</h2>
                <RecordsByArtist artistId={id}/>
                <h2 className="section-header">Tracks</h2>
                <TracksByArtist artistId={id}/>
            </div>
            <CopyrightInformation className={"d-block d-lg-none mt-5"}/>
        </div>
    )
}

export default ArtistPageMainColumn
