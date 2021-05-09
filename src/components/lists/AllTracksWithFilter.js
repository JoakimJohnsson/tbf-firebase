import React, {useState} from "react";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import {FetchAllTracks} from "../../api-functions/api";
import {TracksPlayerListItemWithImage} from "../apiComponents/TrackComponents";
import {prepareFilterText} from "../microComponents/microComponentsHelper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AllTracksWithFilter = () => {
    const [filter, setFilter] = useState('');
    const tracks = FetchAllTracks();
    const clearInput = () => {
        setFilter('')
    }

    return tracks.length ?
        (
            <>
                <div className="input-group col-12 col-sm-8 col-lg-6">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon={"filter"}/></span>
                    </div>
                    <input id="filter"
                           name="filter"
                           type="text"
                           className="form-control small"
                           placeholder="Filter by artist or track"
                           value={filter}
                           onChange={event => setFilter(event.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="input-group-text" onClick={clearInput}><FontAwesomeIcon icon={"times"}/></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 px-3 pt-3">
                        <ul className="tracks-player__list">
                            {tracks.filter(track => track.name.toLowerCase().includes(filter.toLowerCase()) ||
                            track.artistId.toLowerCase().includes(prepareFilterText(filter)) || filter === '')
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
