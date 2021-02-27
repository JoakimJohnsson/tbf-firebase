import React from "react";
import {CopyrightInfoComponent} from "../../components/MicroComponents/MicroComponents";
import {ArtistLink} from "../../components/lists/ArtistItem";
import AllArtistsListPaginated from "../../components/lists/AllArtistsListPaginated";
import IconLink from "../../components/links/IconNavLink";
import * as ROUTES from "../../constants/routes";
import {RecordLink} from "../../components/cards/RecordCard";
import AllRecordsListPaginated from "../../components/lists/AllRecordsListPaginated";
import AllTracksPaginated from "../../components/lists/AllTracksPaginated";

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
                <AllArtistsListPaginated/>
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
                <AllRecordsListPaginated fullWidth={false}/>
                <IconLink className={"ml-3"} link={ROUTES.RECORDS} text={"See all records"} icon={"compact-disc"}/>
            </div>
            <div className="standard-main-column__section">
                <h2 className="section-header">Popular tracks</h2>
                <p className="small m-0">Total number of tracks: {counters.songCounter}</p>
                <AllTracksPaginated/>
                <IconLink className={"ml-3"} link={ROUTES.TRACKS} text={"See all tracks"} icon={"music"}/>
            </div>
            <CopyrightInfoComponent className={"d-block d-lg-none"}/>
        </div>
    )
}

export default StartPageMainColumn
