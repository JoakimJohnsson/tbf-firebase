import React from 'react';
import firebase from '../components/Firebase/firebase';
import AllArtistsListPaginated from "../components/lists/AllArtistsListPaginated";
import AllSongsListPaginated from "../components/lists/AllSongsListPaginated";
import {CopyrightInfoComponent, LoadingComponent} from "../components/MicroComponents/MicroComponents";
import IconLink from "../components/links/IconNavLink";
import * as ROUTES from "../constants/routes";
import AllRecordsListPaginated from "../components/lists/AllRecordsListPaginated";
import {FetchLastUpdatedArtistTimestamp, FetchLastUpdatedArtistId, FetchCounters} from "../api-functions/artists-api";
import {ArtistLink} from "../components/lists/ArtistItem";
import {FetchLastAddedRecordArtistId, FetchLastAddedRecordId, FetchLastAddedRecordTimestamp} from "../api-functions/records-api";
import {RecordLink} from "../components/cards/RecordCard";

console.log("-- WE HAVE FIREBASE " + firebase.app.name + " --");

const StartPage = () => {

    const lastUpdatedArtistId = FetchLastUpdatedArtistId();
    const lastUpdatedArtistDate = new Date(FetchLastUpdatedArtistTimestamp().seconds * 1000);
    const lastAddedRecordId = FetchLastAddedRecordId();
    const lastAddedRecordArtistId = FetchLastAddedRecordArtistId();
    const lastAddedRecordDate = new Date(FetchLastAddedRecordTimestamp().seconds * 1000);

    let counters = FetchCounters();
    let countersAreFetched;

    counters.recordCounter && counters.songCounter ?
        countersAreFetched = true : countersAreFetched = false;

    return lastUpdatedArtistId.length && lastAddedRecordId.length && lastAddedRecordArtistId.length && countersAreFetched ?
        (<div className="row">
            <div className="standard-secondary-column">
                <div className="standard-box-wrapper__near-dark mb-5">
                    <h1>The Baseball Field & Friends</h1>
                    <p>The music scene in Nyköping has delivered great music since the early 90's. </p>
                    <p>This website, former home of band <b>The Baseball Field</b> and music labels <b>Vanishing Vanity Music</b> and <b>Strandad
                        Sjöbuse Records</b>, now brings you that good old music in a modern way.</p>
                    <h2>Extra content</h2>
                    <h3>Links</h3>
                    <p><a href="/old">The old TBF/VVM site</a></p>
                    <h3>Video</h3>
                    <p>T.B.A</p>
                    <CopyrightInfoComponent className={"d-none d-lg-block"}/>
                </div>
            </div>
            <div className="standard-main-column">
                <div className="standard-main-column__section">
                    <h2 className="section-header">Popular artists</h2>

                    <p className="small m-0">Last updated artist: <ArtistLink
                        id={lastUpdatedArtistId}/> ({lastUpdatedArtistDate.toLocaleDateString()}).</p>

                    <AllArtistsListPaginated/>
                    <IconLink className={"ml-3"} link={ROUTES.ARTISTS} text={"See all artists"} icon={"user-astronaut"}/>
                </div>
                <div className="standard-main-column__section">
                    <h2 className="section-header">Popular records</h2>

                    <p className="small m-0">Last added record: <RecordLink
                        id={lastAddedRecordId}/> by <ArtistLink id={lastAddedRecordArtistId}/>  ({lastAddedRecordDate.toLocaleDateString()}). Total number of records: {counters.recordCounter}</p>

                    <AllRecordsListPaginated fullWidth={false}/>
                    <IconLink className={"ml-3"} link={ROUTES.RECORDS} text={"See all records"} icon={"compact-disc"}/>
                </div>
                <div className="standard-main-column__section">
                    <h2 className="section-header">Popular songs</h2>
                    <p className="small m-0">Total number of songs: {counters.songCounter}</p>

                    <AllSongsListPaginated/>
                    <IconLink className={"ml-3"} link={ROUTES.TRACKS} text={"See all songs"} icon={"music"}/>
                </div>
                <CopyrightInfoComponent className={"d-block d-lg-none"}/>
            </div>
        </div>)
        :
        (<LoadingComponent spinning={true}/>)
};
export default StartPage;
