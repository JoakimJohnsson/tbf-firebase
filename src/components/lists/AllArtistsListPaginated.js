import React from 'react';
import ArtistCard from "../cards/ArtistCard";
import {LoadingComponent} from "../MicroComponents/MicroComponents";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AllArtistsListPaginated = () => {

    const {
        loadingMore,
        hasMore,
        items,
        loadMore
    } = usePagination(
        firebase
            .firestore()
            .collection("artists")
            .orderBy("numberOfViews", "desc"),
        {
            limit: 4
        }
    );
    return items.length ? (
        <div className="row">
            {items.map(item => (
                <ArtistCard route="artist" id={item.id} key={item.id} imgUrl={item.data().imgUrl} name={item.data().name}/>
            ))}
            {
                hasMore && !loadingMore &&
                <div className="col-12">
                    <button className="btn button__load-more mb-3" onClick={loadMore}><FontAwesomeIcon icon={"arrow-alt-circle-down"} aria-label="Show more artists"/></button>
                </div>
            }
        </div>
    )
        :
        (<LoadingComponent spinning={true}/>)
};

export default AllArtistsListPaginated;
