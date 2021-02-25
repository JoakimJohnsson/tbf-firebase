import React from 'react';
import Artist from "../lists/ArtistItem";
import {FetchSongFromId} from "../../api-functions/songs-api";

const SongCardDynamic = ({id}) => {

    return (
        <div className="song-card-dynamic__wrapper">
            {id ?
                <SongCardDynamicContent id={id}/>
                :
                ""
            }
        </div>
    )
};

const SongCardDynamicContent = ({id}) => {

    const song = FetchSongFromId(id);
    return song.artistId ? (
            <>
                <div className="song-card-dynamic">
                    <div className="p-3 text-center"><span className="d-inline-block song-card-dynamic__info px-3 py-1 border"><Artist id={song.artistId}/>: {song.name}</span></div>
                    <div className="px-3 pb-3">
                        <audio controls autoPlay={false} className="w-100">
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