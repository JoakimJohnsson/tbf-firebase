import React, {useState} from "react";
import {LoadingComponent} from "../MicroComponents/MicroComponents";
import usePagination from "firestore-pagination-hook";
import firebase from "firebase";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ClickableTrackListItemWithImage} from "./SongItem";
import SongCardDynamic from "../cards/SongCardDynamic";

const AllSongsListPaginated = ({fullwidth}) => {
    const [currentSong, setCurrentSong] = useState(null);
    const setCurrentSongOnClick = (songId) => {
        setCurrentSong(songId);
    }
    const destroyCurrentSong = () => {
        setCurrentSong(null);
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
    return items.length
        ? (<div className="row">
                <div className="col-12 p-3">
                    <ul className="play-tracks__list mb-3 mb-sm-0 mb-lg-3">
                    {items.map(item => (
                        <ClickableTrackListItemWithImage key={item.index} id={item.id} setCurrentSong={setCurrentSongOnClick} currentSong={currentSong}/>
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
                    {currentSong ? <SongCardDynamic id={currentSong} key={currentSong} destroyCurrentSong={destroyCurrentSong}/> : false}
                </div>
            </div>
        )
        : (<LoadingComponent/>)
};

export default AllSongsListPaginated;
