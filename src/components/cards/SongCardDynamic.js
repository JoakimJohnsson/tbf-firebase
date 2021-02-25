import React from 'react';
import Artist from "../lists/ArtistItem";
import {FetchSongFromId} from "../../api-functions/songs-api";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SongCardDynamic = ({id, destroyCurrentSong}) => {

    return (
        <div className="song-card-dynamic__wrapper">

            {id ?
                <SongCardDynamicContent id={id} destroySong={destroyCurrentSong}/>
                :
                ""
            }
        </div>
    )
};

const SongCardDynamicContent = ({id, destroySong}) => {

    const song = FetchSongFromId(id);
    return song.artistId ? (
            <>
                <div className="song-card-dynamic">
                    <div className="p-3 text-center">
                        <span className="song-card-dynamic__info px-3 py-1 mr-2"><Artist id={song.artistId}/>: {song.name}</span>
                        <button className="btn btn-fa__primary" aria-label="Close song"
                                onClick={() => {
                                    destroySong()
                                }}>
                            <FontAwesomeIcon icon={"times"}/>
                        </button>
                    </div>
                    <div className="px-3 px-md-5 pb-3 text-center">
                        <audio controls autoPlay={true}>
                            <source src={song.url} type="audio/mpeg"/>
                            <p>
                                Your browser doesn't support HTML5 audio.
                            </p>
                        </audio>
                    </div>
                </div>
            </>
        )
        :
        ""
}

export default SongCardDynamic;