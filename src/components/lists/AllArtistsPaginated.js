import React from 'react';
import ArtistCard from "../cards/ArtistCard";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import LoadMoreButton from "../microComponents/Buttons/LoadMoreButton";

const AllArtistsPaginated = () => {

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
            limit: 6
        }
    );
    return items.length ?
        (<div className="row">
            {items.map(item => (
                <ArtistCard route="artist"
                            id={item.id}
                            key={item.id}
                            imgUrl={item.data().imgUrl}
                            name={item.data().name}
                            fullWidth={false}/>
            ))}
            {
                hasMore && !loadingMore &&
                <LoadMoreButton loadMore={loadMore}/>
            }
        </div>)
        :
        (<LoadingStandard spinning={true}/>)
};

export default AllArtistsPaginated;
