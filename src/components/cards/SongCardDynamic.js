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
    let rand = Math.floor(Math.random() * 8) + 1;
    return song.artistId ? (
            <>
                <div className={`song-card-dynamic text-color-variant__${rand.toString()}`}>
                    <div className="p-3 small"><span className="text-uppercase font-weight-bold"><Artist id={song.artistId}/></span>: {song.name}</div>
                    <div>
                        <audio controls autoPlay={true} className="w-100">
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