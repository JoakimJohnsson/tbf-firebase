import React from 'react';
import firebase from '../Firebase/firebase';
import {LoadingStandard} from "../MicroComponents/MicroComponents";
import {FetchLastUpdatedArtistTimestamp, FetchLastUpdatedArtistId, FetchCounters} from "../../api-functions/artists-api";
import {FetchLastAddedRecordArtistId, FetchLastAddedRecordId, FetchLastAddedRecordTimestamp} from "../../api-functions/records-api";
import StartPageSecondaryColumn from "./pagesComponents/StartPageSecondaryColumn";
import StartPageMainColumn from "./pagesComponents/StartPageMainColumn";

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
            <StartPageSecondaryColumn/>
            <StartPageMainColumn
                lastUpdatedArtistId={lastUpdatedArtistId}
                lastUpdatedArtistDate={lastUpdatedArtistDate}
                lastAddedRecordDate={lastAddedRecordDate}
                lastAddedRecordId={lastAddedRecordId}
                lastAddedRecordArtistId={lastAddedRecordArtistId}
                counters={counters}
            />
        </div>)
        :
        (<LoadingStandard spinning={true}/>)
};
export default StartPage;
