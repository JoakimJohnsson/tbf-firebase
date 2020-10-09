import React from "react";
import {LoadingComponent} from "../../MicroComponents/MicroComponents";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import RecordCard from "../../cardcomponents/RecordCard";

const AllRecordsListPaginated = ({columnClass}) => {

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

    return items.length ? (
            <div className="row">
                {items.map(item => (



                    <RecordCard route="record" id={item.id} name={item.data().name} artistId={item.data().artistId} coverUrl={item.data().coverUrl} columnClass={columnClass} key={item.id}/>

                ))}
                {
                    hasMore && !loadingMore &&
                    <div className="col-12">
                        <button className="btn button__load-more mb-3" onClick={loadMore}><FontAwesomeIcon icon={"arrow-alt-circle-down"} aria-label="Show more songs"/></button>
                    </div>
                }
            </div>
        )
        :
        (<LoadingComponent/>)
};

export default AllRecordsListPaginated;
