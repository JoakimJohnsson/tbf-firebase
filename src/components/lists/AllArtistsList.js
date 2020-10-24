import React from 'react';
import FetchAllArtists from "../../api-functions/artists-api";
import ArtistCard from "../cards/ArtistCard";
import {LoadingComponent} from "../MicroComponents/MicroComponents";

const AllArtistsList = () => {
    const artists = FetchAllArtists();
    return artists.length ?
        (<div className="row">
                {artists.map((artist) =>
                    <ArtistCard route="artist" id={artist.id} key={artist.id} imgUrl={artist.imgUrl} name={artist.name} fullWidth/>
                )}
            </div>
        )
        :
        (<LoadingComponent spinning={true}/>)
};

export default AllArtistsList;
