import React from 'react';
import FetchAllArtists from "../../api-functions/artists-api";
import DynamicCard from "../cards/DynamicCard";
import {LoadingComponent} from "../MicroComponents/MicroComponents";

const AllArtistsList = () => {
    const artists = FetchAllArtists();
    return artists.length ?
        (<div className="row">
                {artists.map((artist) =>
                    <DynamicCard route="artist" id={artist.id} key={artist.id} imgUrl={artist.imgUrl} name={artist.name}/>
                )}
            </div>
        )
        :
        (<LoadingComponent spinning={true}/>)
};

export default AllArtistsList;
