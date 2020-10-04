import React from 'react';
import FetchAllArtists from "../../../../api-functions/Artists";
import DynamicCard from "../../../cardcomponents/simple/DynamicCard";
import {LoadingComponent} from "../../../MicroComponents";

const AllArtistsList = () => {
    const artists = FetchAllArtists();
    return artists.length ?
        (<div className="row">
                {artists.map((artist) =>
                    <DynamicCard route="artist" id={artist.id} name={artist.name}/>
                )}
            </div>
        )
        :
        (<LoadingComponent/>)
};

export default AllArtistsList;
