import React from 'react';
import MembersByArtistList from "../../components/listcomponents/simple/MembersByArtistList";
import {CopyrightInfoComponent} from "../../components/MicroComponents";
import {FetchArtistFromId} from "../../api-functions/Artists";
import RecordsByArtistList from "../../components/listcomponents/simple/RecordsByArtistList";

const ArtistPage = ({match}) => {
    const {params: {id}} = match;
    const artist = FetchArtistFromId(id);

    return (
        <div className="row">
            <div className="standard-main-column order-2 order-lg-1">
                <RecordsByArtistList artistId={id}/>
            </div>
            <div className="standard-secondary-column order-1 order-lg-2 mb-5">
                <div className="standard-box-wrapper__near-dark">
                    <h1 className="text-capitalize">{artist.name}</h1>
                    <p>{artist.description}</p>
                    <h2>Members</h2>
                    <MembersByArtistList artistId={id}/>
                    <CopyrightInfoComponent/>
                </div>
            </div>
        </div>
    );
};

export default ArtistPage;
