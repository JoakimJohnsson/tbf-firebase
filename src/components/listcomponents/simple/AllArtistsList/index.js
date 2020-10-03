import React from 'react';
import FetchAllArtists from "../../../../api-functions/Artists";
import MembersByArtistList from "../MembersByArtistList";
import DynamicLink from "../../../linkcomponents/simple/DynamicLink";

const AllArtistsList = () => {
    const artists = FetchAllArtists();
    return (
        <ul>
            {artists.map((artist) =>
                <li key={artist.id}>
                    <DynamicLink route="artist" id={artist.id} name={artist.name}/>
                </li>
            )}
        </ul>
    )
};

export default AllArtistsList;
