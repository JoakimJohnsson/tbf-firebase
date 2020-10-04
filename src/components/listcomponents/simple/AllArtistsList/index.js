import React from 'react';
import FetchAllArtists from "../../../../api-functions/Artists";
import DynamicCard from "../../../cardcomponents/simple/DynamicCard";

const AllArtistsList = () => {
    const artists = FetchAllArtists();
    return (
        <div className="row">
            {artists.map((artist) =>
                <DynamicCard route="artist" id={artist.id} name={artist.name}/>
            )}
        </div>
    )
};

export default AllArtistsList;
