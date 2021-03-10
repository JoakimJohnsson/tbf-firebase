import React from 'react';
import {CopyrightInformation} from "../MicroComponents/MicroComponents";
import {AllTracksListByRecord} from "../lists/AllTracks";

const TracksPage = () => (
    <div className="row no-gutters">
        <div className="col-12">
            <h1 className="mb-3">Tracks</h1>
        </div>
        <div className="col-12 mb-4">
            <AllTracksListByRecord/>
        </div>
        <div className="col-12">
            <CopyrightInformation/>
        </div>
    </div>
);
export default TracksPage;
