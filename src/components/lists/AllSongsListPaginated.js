import React from "react";
import {LoadingComponent} from "../MicroComponents/MicroComponents";
import SongCard from "../cards/SongCard";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AllSongsListPaginated = ({fullwidth}) => {
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
    return items.length
        ? (<div className="row">
                {items.map(item => (
                    <SongCard id={item.id} key={item.id} recordId={item.data().recordId} linked/>
                ))}
                {
                    hasMore && !loadingMore &&
                    <div className="col-12">
                        <button className="btn button__load-more mb-3" onClick={loadMore}><FontAwesomeIcon icon={"arrow-alt-circle-down"} aria-label="Show more songs"/></button>
                    </div>
                }
            </div>)
        : (<LoadingComponent spinning={true}/>)
};

export default AllSongsListPaginated;
