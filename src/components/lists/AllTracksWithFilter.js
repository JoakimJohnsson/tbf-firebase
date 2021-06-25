import React, {useState} from "react";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import {FetchAllTracks} from "../../api-functions/api";
import {TracksPlayerListItemWithImage} from "../apiComponents/TrackComponents";
import {prepareFilterText} from "../microComponents/microComponentsHelper";
import FilterInput from "../formsAndInputs/FilterInput";

const AllTracksWithFilter = () => {
    const [filter, setFilter] = useState('');
    const tracks = FetchAllTracks();

    return tracks.length ?
        (
            <>
                <FilterInput filter={filter} setFilter={setFilter} placeHolder={"Filter by artist or track"}/>
                <div className="row">
                    <div className="col-12 px-3 pt-3">
                        <ul className="tracks-player__list">
                            {tracks.filter(track => track.name.toLowerCase().includes(filter.toLowerCase()) ||
                                prepareFilterText(track.artistId).includes(prepareFilterText(filter)) || filter === '')
                                .map(track =>
                                    <TracksPlayerListItemWithImage key={track.id} id={track.id}/>
                                )}
                        </ul>
                    </div>
                </div>
            </>
        )
        :
        (<LoadingStandard spinning={true}/>)
};

export default AllTracksWithFilter;
