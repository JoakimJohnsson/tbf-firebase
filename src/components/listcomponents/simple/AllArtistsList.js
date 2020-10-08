import React from 'react';
import FetchAllArtists from "../../../api-functions/artists-api";
import DynamicCard from "../../cardcomponents/simple/DynamicCard";
import {LoadingComponent} from "../../MicroComponents/MicroComponents";

const AllArtistsList = () => {
    const artists = FetchAllArtists();
    return artists.length ?
        (<div className="row">
                {artists.map((artist) =>
                    <DynamicCard route="artist" id={artist.id} key={artist.id}/>
                )}
            </div>
        )
        :
        (<LoadingComponent/>)
};

export default AllArtistsList;
