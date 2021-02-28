import React from "react";
import {LoadingLazyBackground} from "../MicroComponents/MicroComponents";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RecordCard from "../cards/RecordCard";

const AllRecordsListPaginated = ({fullWidth}) => {

    const {
        loadingMore,
        hasMore,
        items,
        loadMore
    } = usePagination(
        firebase
            .firestore()
            .collection("records")
            .orderBy("numberOfViews", "desc"),
        {
            limit: 4
        }
    );

    return items.length
        ? (<div className="row">
                {items.map(item => (
                    <RecordCard route="record" id={item.id} name={item.data().name} artistId={item.data().artistId} coverUrl={item.data().coverUrl} fullWidth={fullWidth} year={item.data().year} format={item.data().format} key={item.id}/>
                ))}
                {
                    hasMore && !loadingMore &&
                    <div className="col-12 text-center pt-3">
                        <button className="btn button__load-more mb-3" onClick={loadMore}>
                            <FontAwesomeIcon icon={"chevron-down"} aria-label="Show more songs"/>
                        </button>
                    </div>
                }
            </div>)
        : (<LoadingLazyBackground />)
};

export default AllRecordsListPaginated;
