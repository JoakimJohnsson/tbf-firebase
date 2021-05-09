import React, {useState} from "react";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import {FetchAllTracks} from "../../api-functions/api";
import {TracksPlayerListItemWithImage} from "../apiComponents/TrackComponents";
import {Debugger} from "../microComponents/microComponentsHelper";

const AllTracksWithFilter = () => {
    const [filter, setFilter] = useState('');
    const tracks = FetchAllTracks();
    return tracks.length ?
        (
            <>
                <div className="col-12 col-sm-8 col-lg-6">
                    <label className="form-label">Type to filter tracks:</label>
                    <input id="filter"
                           name="filter"
                           type="text"
                           className="form-control"
                           value={filter}
                           onChange={event => setFilter(event.target.value)}
                    />
                </div>
                <div className="row">
                    <div className="col-12 px-3 pt-3">
                        <ul className="tracks-player__list">
                            <Debugger logThis={tracks}/>
                            {tracks.filter(track => track.name.toLowerCase().includes(filter.toLowerCase()) ||
                            track.artistId.toLowerCase().includes(filter.toLowerCase()))
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
