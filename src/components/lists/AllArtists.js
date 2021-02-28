import React from 'react';
import FetchAllArtists from "../../api-functions/artists-api";
import ArtistCard from "../cards/ArtistCard";
import {LoadingStandard} from "../MicroComponents/MicroComponents";

const AllArtists = () => {
    const artists = FetchAllArtists();
    return artists.length ?
        (<div className="row">
                {artists.map((artist) =>
                    <ArtistCard route="artist" id={artist.id} key={artist.id} imgUrl={artist.imgUrl} name={artist.name} fullWidth/>
                )}
            </div>
        )
        :
        (<LoadingStandard spinning={true}/>)
};

export default AllArtists;
