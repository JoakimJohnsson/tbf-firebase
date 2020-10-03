import React from 'react';
import firebase from '../../components/Firebase/firebase';
import AllArtistsList from "../../components/listcomponents/simple/AllArtistsList";
import AllSongsList from "../../components/listcomponents/simple/AllSongsList";
import FullRecordList from "../../components/listcomponents/simple/AllRecordsList";
import {CopyrightInfoComponent} from "../../components/MicroComponents";

const StartPage = () => (
    <div className="row">

        <div className="standard-main-column">

            <div className="mb-3 standard-box-wrapper__near-dark">
                <h2>Artists        </h2>
                <AllArtistsList />
            </div>

            <div className="mb-3 standard-box-wrapper__near-dark">
                <h2>Records</h2>
                <FullRecordList />
            </div>

            <div className="mb-3 standard-box-wrapper__near-dark">
                <h2>Songs</h2>
                <AllSongsList />
            </div>
        </div>

        <div className="standard-secondary-column">
            <div className="mb-5 standard-box-wrapper__near-dark">
                <h1>The Baseball Field & Friends</h1>
                <p>The music scene in Nyköping has delivered great music since the early 90's. </p>
                <p>This website, former home of band <b>The Baseball Field</b> and music labels <b>Vanishing Vanity Music</b> and <b>Strandad
                    Sjöbuse Records</b>, now brings you that good old music in a modern way.</p>
                <p>Here is a <a href="/old">link</a> to the old site</p>

                <CopyrightInfoComponent/>
            </div>
        </div>

    </div>
);
export default StartPage;
