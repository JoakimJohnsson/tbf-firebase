import React from "react";
import LoadingLazyBackground from "../microComponents/LoadingLazyBackground";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import RecordCard from "../cards/RecordCard";
import LoadMoreButton from "../microComponents/LoadMoreButton";

const AllRecordsPaginated = () => {

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

    return items.length ?
        (<div className="row">
            {items.map(item => (
                <RecordCard route="record" id={item.id} name={item.data().name} artistId={item.data().artistId} coverUrl={item.data().coverUrl}
                            fullWidth={false} year={item.data().year} format={item.data().format} key={item.id}/>
            ))}
            {
                hasMore && !loadingMore &&
                <LoadMoreButton loadMore={loadMore}/>
            }
        </div>)
        :
        (<LoadingLazyBackground/>)
};

export default AllRecordsPaginated;
