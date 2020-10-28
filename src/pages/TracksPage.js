import React from 'react';
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import {AllSongsListByRecord} from "../components/lists/AllSongsList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TracksPage = () => (
    <div className="row no-gutters">
        <div className="col-12">
            <h1 className="mb-3"><FontAwesomeIcon icon={"music"} className={"mr-3"}/>Tracks</h1>
        </div>
        <div className="col-12 mb-4">
            <AllSongsListByRecord/>
        </div>
        <div className="col-12">
            <CopyrightInfoComponent/>
        </div>
    </div>
);
export default TracksPage;
