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
import {FetchLastAddedRecordId, FetchLastAddedRecordTimestamp} from "../api-functions/records-api";
import {RecordLink} from "../components/cards/RecordCard";

console.log("-- WE HAVE FIREBASE " + firebase.app.name + " --");

const StartPage = () => {

    const latestUpdatedArtistId = FetchLastUpdatedArtistId();
    const latestUpdatedArtistDate = new Date(FetchLastUpdatedArtistTimestamp().seconds * 1000);
    const latestAddedRecordId = FetchLastAddedRecordId();
    const latestAddedRecordDate = new Date(FetchLastAddedRecordTimestamp().seconds * 1000);

    let counters = FetchCounters();
    let countersAreFetched;

    counters.recordCounter && counters.songCounter ?
        countersAreFetched = true : countersAreFetched = false;

    return latestUpdatedArtistId.length && latestAddedRecordId.length && countersAreFetched ?
        (<div className="row">
            <div className="standard-secondary-column">
                <div className="standard-box-wrapper__near-dark">
                    <h1>The Baseball Field & Friends</h1>
                    <p>The music scene in Nyköping has delivered great music since the early 90's. </p>
                    <p>This website, former home of band <b>The Baseball Field</b> and music labels <b>Vanishing Vanity Music</b> and <b>Strandad
                        Sjöbuse Records</b>, now brings you that good old music in a modern way.</p>
                    <p>Here is a <a href="/old">link</a> to the old site</p>
                    <CopyrightInfoComponent className={"d-none d-lg-block"}/>
                </div>
            </div>
            <div className="standard-main-column">
                <div className="standard-main-column__section">
                    <h2 className="section-header">Popular artists</h2>

                    <p className="small m-0">Last updated artist: <ArtistLink
                        id={latestUpdatedArtistId}/> ({latestUpdatedArtistDate.toLocaleDateString()}).</p>

                    <AllArtistsListPaginated/>
                    <IconLink className={"ml-3"} link={ROUTES.ARTISTS} text={"See all artists"} icon={"user-astronaut"}/>
                </div>
                <div className="standard-main-column__section">
                    <h2 className="section-header">Popular records</h2>

                    <p className="small m-0">Last added record: <RecordLink
                        id={latestAddedRecordId}/> ({latestAddedRecordDate.toLocaleDateString()}). Total number of records: {counters.recordCounter}</p>

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
