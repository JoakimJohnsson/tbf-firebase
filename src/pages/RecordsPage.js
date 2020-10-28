import React from 'react';
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import AllRecordsByArtistList from "../components/lists/AllRecordsByArtistList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const RecordsPage = () => (
    <div className="row no-gutters">
        <div className="col-12">
            <h1 className="mb-3"><FontAwesomeIcon icon={"user-astronaut"} className={"mr-3"}/>Records</h1>
        </div>
        <div className="col-12 mb-4">
            <AllRecordsByArtistList fullWidth/>
        </div>
        <div className="col-12">
            <CopyrightInfoComponent/>
        </div>
    </div>
);

export default RecordsPage;
