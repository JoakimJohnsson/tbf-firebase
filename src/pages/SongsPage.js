import React from 'react';
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import AllSongsList from "../components/lists/AllSongsList";
import * as COLUMNS from "../constants/cols";

const SongsPage = () => (


    <div className="row no-gutters">
        <h1>Songs</h1>
        <div className="col-12 mb-5">
            <AllSongsList columnClass={COLUMNS.SONGS_FULLWIDTH}/>
        </div>
        <CopyrightInfoComponent/>
    </div>

);
export default SongsPage;
