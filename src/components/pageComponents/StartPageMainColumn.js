import React from "react";
import {CopyrightInformation} from "../MicroComponents/MicroComponents";
import {ArtistLink} from "../api-components/ArtistComponents";
import AllArtistsPaginated from "../lists/AllArtistsPaginated";
import IconLink from "../links/IconNavLink";
import * as ROUTES from "../../constants/routes";
import {RecordLink} from "../cards/RecordCard";
import AllRecordsPaginated from "../lists/AllRecordsPaginated";
import AllTracksPaginated from "../lists/AllTracksPaginated";

const StartPageMainColumn = ({
                                 lastUpdatedArtistId,
                                 lastUpdatedArtistDate,
                                 lastAddedRecordDate,
                                 lastAddedRecordId,
                                 lastAddedRecordArtistId,
                                 counters
                             }) => {
    return (
        <div className="standard-main-column">
            <div className="standard-main-column__section">
                <h2 className="section-header">Popular artists</h2>
                <p className="small m-0">
                    Last updated artist:
                    <ArtistLink id={lastUpdatedArtistId}/> ({lastUpdatedArtistDate.toLocaleDateString()}).
                </p>
                <AllArtistsPaginated/>
                <IconLink className={"ml-3"} link={ROUTES.ARTISTS} text={"See all artists"} icon={"user-astronaut"}/>
            </div>
            <div className="standard-main-column__section">
                <h2 className="section-header">Popular records</h2>
                <p className="small m-0">
                    Last added record:
                    <RecordLink id={lastAddedRecordId}/> by
                    <ArtistLink id={lastAddedRecordArtistId}/> ({lastAddedRecordDate.toLocaleDateString()}).
                    Total number of records: {counters.recordCounter}
                </p>
                <AllRecordsPaginated fullWidth={false}/>
                <IconLink className={"ml-3"} link={ROUTES.RECORDS} text={"See all records"} icon={"compact-disc"}/>
            </div>
            <div className="standard-main-column__section">
                <h2 className="section-header">Popular tracks</h2>
                <p className="small m-0">Total number of tracks: {counters.songCounter}</p>
                <AllTracksPaginated/>
                <IconLink className={"ml-3"} link={ROUTES.TRACKS} text={"See all tracks"} icon={"music"}/>
            </div>
            <CopyrightInformation className={"d-block d-lg-none"}/>
        </div>
    )
}

export default StartPageMainColumn
