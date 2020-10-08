import React from 'react';
import DynamicCard from "../../cardcomponents/simple/DynamicCard";
import {LoadingComponent} from "../../MicroComponents/MicroComponents";
import {FetchArtistsWithLimit} from "../../../api-functions/artists-api"

const AllArtistsListPaginated = () => {
    const firstArtists = FetchArtistsWithLimit(3);
    return firstArtists.length ?
        (<div className="row">
                {firstArtists.map((artist) =>
                    <DynamicCard route="artist" id={artist.id} name={artist.name} key={artist.id}/>
                )}
            </div>
        )
        :
        (<LoadingComponent/>)
};

export default AllArtistsListPaginated;
