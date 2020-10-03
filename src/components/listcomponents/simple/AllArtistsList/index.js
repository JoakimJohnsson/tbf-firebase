import React from 'react';
import FetchAllArtists from "../../../../api-functions/Artists";
import MembersByArtistList from "../MembersByArtistList";

const AllArtistsList = () => {
    const artists = FetchAllArtists();
    return (
        <ul>
            {artists.map((artist) =>
                <li key={artist.id}>
                    {artist.name}
                    <MembersByArtistList artistId={artist.id}/>
                </li>
            )}
        </ul>
    )
};

export default AllArtistsList;
