import React, {useState} from "react";
import {LoadingLazyBackground} from "../microComponents/MicroComponents";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {TracksPlayerListItemWithImage} from "../apiComponents/TrackComponents";
import TrackPlayer from "../cards/TrackPlayer";

const AllTracksPaginated = () => {
    const [currentTrack, setCurrentTrack] = useState(null);
    const setCurrentTrackOnClick = (songId) => {
        setCurrentTrack(songId);
    }
    const destroyCurrentTrack = () => {
        setCurrentTrack(null);
    }
    const {
        loadingMore,
        hasMore,
        items,
        loadMore
    } = usePagination(
        firebase
            .firestore()
            .collection("songs")
            .orderBy("numberOfPlays", "desc"),
        {
            limit: 4
        }
    );
    return items.length ?
        (<div className="row">
                <div className="col-12 px-3 pt-3">
                    <ul className="tracks-player__list mb-3 mb-sm-0 mb-lg-3">
                    {items.map(item => (
                        <TracksPlayerListItemWithImage key={item.index} id={item.id} setCurrentTrack={setCurrentTrackOnClick} currentTrack={currentTrack}/>
                    ))}
                    {
                        hasMore && !loadingMore &&
                        <div className="col-12 text-center pt-3">
                            <button className="btn button__load-more mb-3" onClick={loadMore}>
                                <FontAwesomeIcon icon={"chevron-down"} aria-label="Show more songs"/>
                            </button>
                        </div>
                    }
                    </ul>
                    {currentTrack ? <TrackPlayer id={currentTrack} key={currentTrack} destroyCurrentTrack={destroyCurrentTrack}/> : false}
                </div>
            </div>
        )
        : (<LoadingLazyBackground/>)
};

export default AllTracksPaginated;
