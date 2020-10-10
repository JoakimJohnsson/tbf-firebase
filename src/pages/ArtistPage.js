import React from 'react';
import MembersByArtistList from "../components/lists/MembersByArtistList";
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import {FetchArtistFromId} from "../api-functions/artists-api";
import RecordsByArtistList from "../components/lists/RecordsByArtistList";
import * as STRINGS from "../constants/strings"
import imgUnavailable from "../images/image_unavailable.png";

const ArtistPage = ({match}) => {
    const {params: {id}} = match;
    const artist = FetchArtistFromId(id);

    return (
        <div className="row">
            <div className="standard-main-column order-2 order-lg-1">
                <h2>Records</h2>
                <RecordsByArtistList artistId={id}/>
                <CopyrightInfoComponent className={"d-block d-lg-none mt-5"}/>
            </div>
            <div className="standard-secondary-column order-1 order-lg-2">
                <div className="standard-box-wrapper__near-dark">
                    <h1 className="text-capitalize">{artist.name}</h1>
                    <img className="w-100 mb-3 opacity-4" alt={`${artist.name}`} src={artist.imgUrl || imgUnavailable}/>
                    <p>
                        {artist.name}
                        {artist.description !== "" ?
                            artist.description
                            :
                            artist.imgUrl === "" ?
                                STRINGS.DEFAULT_ARTIST_DESCRIPTION_MISSING_IMAGE
                                :
                                STRINGS.DEFAULT_ARTIST_DESCRIPTION}

                    </p>
                    <h2>Members</h2>
                    <MembersByArtistList artistId={id}/>
                    <CopyrightInfoComponent className={"d-none d-lg-block"}/>
                </div>
            </div>
        </div>
    );
};

export default ArtistPage;
