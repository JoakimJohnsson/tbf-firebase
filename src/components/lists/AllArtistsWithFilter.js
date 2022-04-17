import React, {useState} from 'react';
import {FetchAllArtists} from "../../api-functions/api";
import ArtistCard from "../cards/ArtistCard";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import FilterInput from "../formsAndInputs/FilterInput";

const AllArtistsWithFilter = () => {
    const [filter, setFilter] = useState('');
    const artists = FetchAllArtists();
    return artists.length ?
        (
            <>
                <FilterInput filter={filter} setFilter={setFilter} placeHolder={"Filter by artist"}/>
                <div className="row">
                    {artists
                        .filter(artist => artist.name.toLowerCase()
                            .includes(filter.toLowerCase()) || filter === '')
                            .map(artist =>
                            <ArtistCard route="artist"
                                        id={artist.id}
                                        key={artist.id}
                                        imgUrl={artist.imgUrl}
                                        name={artist.name}
                                        fullWidth={true}/>
                        )}
                </div>
            </>
        )
        :
        (<LoadingStandard spinning={true}/>)
};

export default AllArtistsWithFilter;
