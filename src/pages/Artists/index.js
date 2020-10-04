import React from 'react';
import AllArtistsList from "../../components/listcomponents/simple/AllArtistsList";
import {CopyrightInfoComponent} from "../../components/MicroComponents";

const ArtistsPage = () => (
    <div className="row no-gutters">
        <h1>Artists</h1>
        <div className="col-12 mb-5">
            <AllArtistsList/>
        </div>
        <CopyrightInfoComponent/>
    </div>
);
export default ArtistsPage;
