import React, {useState} from "react";
import LoadingLazyBackground from "../microComponents/Loading/LoadingLazyBackground";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import {TracksPlayerListItemWithImage} from "../apiComponents/TrackComponents";
import TrackPlayer from "../cards/TrackPlayer";
import LoadMoreButton from "../microComponents/Buttons/LoadMoreButton";

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
                    <ul className="tracks-player__list">
                    {items.map(item => (
                        <TracksPlayerListItemWithImage key={item.index} id={item.id} setCurrentTrack={setCurrentTrackOnClick} currentTrack={currentTrack}/>
                    ))}
                    {
                        hasMore && !loadingMore &&
                        <div className="w-100 text-center">
                            <LoadMoreButton loadMore={loadMore}/>
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
