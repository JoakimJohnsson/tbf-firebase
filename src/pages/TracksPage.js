import React from 'react';
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import AllSongsList from "../components/lists/AllSongsList";

const TracksPage = () => (
    <div className="row no-gutters">
        <h1>All available tracks</h1>
        <div className="col-12 mb-5">
            <AllSongsList fullWidth/>
        </div>
        <CopyrightInfoComponent/>
    </div>
);
export default TracksPage;
