import React from 'react';
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import AllRecordsByArtistList from "../components/lists/AllRecordsByArtistList";

const RecordsPage = () => (
    <div className="row no-gutters">
        <h1>All available records</h1>
        <div className="col-12 mb-5">
            <AllRecordsByArtistList fullWidth/>
        </div>
        <CopyrightInfoComponent />
    </div>
);

export default RecordsPage;
