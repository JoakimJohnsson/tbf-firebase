import React from 'react';
import AllArtists from "../components/lists/AllArtists";
import {CopyrightInformation} from "../components/MicroComponents/MicroComponents";

const ArtistsPage = () => (
    <div className="row no-gutters">
        <div className="col-12">
            <h1 className="mb-0 mb-sm-3">Artists</h1>
        </div>
        <div className="col-12 mb-4">
            <AllArtists/>
        </div>
        <div className="col-12">
            <CopyrightInformation/>
        </div>
    </div>
);
export default ArtistsPage;
