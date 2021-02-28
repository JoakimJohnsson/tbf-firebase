import React from 'react';
import {CopyrightInformation} from "../components/MicroComponents/MicroComponents";
import {AllSongsListByRecord} from "../components/lists/AllTracks";

const TracksPage = () => (
    <div className="row no-gutters">
        <div className="col-12">
            <h1 className="mb-3">Tracks</h1>
        </div>
        <div className="col-12 mb-4">
            <AllSongsListByRecord/>
        </div>
        <div className="col-12">
            <CopyrightInformation/>
        </div>
    </div>
);
export default TracksPage;
