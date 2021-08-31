import React from "react";
import LoadingLazyBackground from "../microComponents/Loading/LoadingLazyBackground";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import {TracksPlayerListItemWithImage} from "../apiComponents/TrackComponents";
import LoadMoreButton from "../microComponents/Buttons/LoadMoreButton";

const TracksByArtistPaginated = (artist) => {
    const {
        loadingMore,
        hasMore,
        items,
        loadMore
    } = usePagination(
        firebase
            .firestore()
            .collection("songs")
            .where("artistId", "==", artist.artistId)
            .orderBy("numberOfPlays", "desc"),
        {
            limit: 10
        }
    );
    return items.length ?
        (<div className="row">
                <div className="col-12 px-3 pt-3">
                    <ul className="tracks-player__list">
                    {items.map(item => (
                        <TracksPlayerListItemWithImage key={item.id} id={item.id} />
                    ))}
                    </ul>
                    {
                        hasMore && !loadingMore &&
                        <div className="w-100 text-center">
                            <LoadMoreButton loadMore={loadMore} ariaLabel={"Load more tracks"}/>
                        </div>
                    }
                </div>
            </div>
        )
        : (<LoadingLazyBackground/>)
};

export default TracksByArtistPaginated;
