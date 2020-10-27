import React from 'react';
import AllArtistsList from "../components/lists/AllArtistsList";
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";

const ArtistsPage = () => (
    <div className="row no-gutters">
        <h1 >Artists</h1>
        <div className="col-12 mb-4">
            <AllArtistsList/>
        </div>
        <CopyrightInfoComponent/>
    </div>
);
export default ArtistsPage;
