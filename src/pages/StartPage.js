import React from 'react';
import firebase from '../components/Firebase/firebase';
import AllArtistsListPaginated from "../components/listcomponents/simple/AllArtistsListPaginated";
import AllSongsList from "../components/listcomponents/simple/AllSongsList";
import AllRecordsList from "../components/listcomponents/simple/AllRecordsList";
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import IconLink from "../components/linkcomponents/simple/IconNavLink";
import * as ROUTES from "../constants/routes";
import * as COLUMNS from "../constants/columns";

console.log("WE HAVE FIREBASE", firebase.performance.name);

const StartPage = () => (
    <div className="row">

        <div className="standard-main-column order-2 order-lg-1">

            <div className="standard-main-column__section">
                <h2>Popular artists</h2>
                <AllArtistsListPaginated />
                <IconLink className={"ml-3"} link={ROUTES.ARTISTS} text={"See all artists"} icon={"user-astronaut"}/>
            </div>

            <div className="standard-main-column__section">
                <h2>Popular records</h2>
                <AllRecordsList columnClass={COLUMNS.RECORDS_MAIN}/>
                <IconLink className={"ml-3"} link={ROUTES.RECORDS} text={"See all records"} icon={"record-vinyl"}/>
            </div>

            <div className="standard-main-column__section">
                <h2>Popular songs</h2>
                <AllSongsList columnClass={COLUMNS.SONGS_MAIN}/>
                <IconLink className={"ml-3"} link={ROUTES.SONGS} text={"See all songs"} icon={"music"}/>
            </div>

            <CopyrightInfoComponent className={"d-block d-lg-none"}/>
        </div>

        <div className="standard-secondary-column order-1 order-lg-2">
            <div className="standard-box-wrapper__near-dark">
                <h1>The Baseball Field & Friends</h1>
                <p>The music scene in Nyköping has delivered great music since the early 90's. </p>
                <p>This website, former home of band <b>The Baseball Field</b> and music labels <b>Vanishing Vanity Music</b> and <b>Strandad
                    Sjöbuse Records</b>, now brings you that good old music in a modern way.</p>
                <p>Here is a <a href="/old">link</a> to the old site</p>

                <CopyrightInfoComponent className={"d-none d-lg-block"}/>
            </div>
        </div>

    </div>
);
export default StartPage;
