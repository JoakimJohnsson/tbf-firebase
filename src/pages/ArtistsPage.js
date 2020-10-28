import React from 'react';
import AllArtistsList from "../components/lists/AllArtistsList";
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ArtistsPage = () => (
    <div className="row no-gutters">
        <div className="col-12">
            <h1 className="mb-0 mb-sm-3"><FontAwesomeIcon icon={"user-astronaut"} className={"mr-3"}/>Artists</h1>
        </div>
        <div className="col-12 mb-4">
            <AllArtistsList/>
        </div>
        <div className="col-12">
            <CopyrightInfoComponent/>
        </div>
    </div>
);
export default ArtistsPage;
