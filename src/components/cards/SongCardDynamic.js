import React from 'react';
import Artist from "../lists/ArtistItem";
import {FetchSongFromId} from "../../api-functions/songs-api";
import {LoadingComponent} from "../MicroComponents/MicroComponents";

const SongCardDynamic = ({id}) => {

    const song = FetchSongFromId(id);
    let rand = Math.floor(Math.random() * 8) + 1;
    return song.artistId ? (
            <div className="col-12 py-3 px-0" key={song.id}>
                <div className={`song-card d-md-flex mb-2 text-color-variant__${rand.toString()}`}>
                    <div className="song-card__content p-3">
                        <div className="song-card__content-inner d-flex justify-content-center flex-column pl-3 w-100 ">
                            <p className="label mb-0">
                                <Artist id={song.artistId}/>
                            </p>
                            <p className="small mb-0">
                                {song.name}
                            </p>
                        </div>
                    </div>
                    <div className="song-card__audio px-3 pb-3 pb-md-0 w-100 d-flex align-items-center">
                        <audio controls autoPlay={true} className="w-100">
                            <source src={song.url} type="audio/mpeg"/>
                            <p>
                                Your browser doesn't support HTML5 audio.
                            </p>
                        </audio>
                    </div>
                </div>

            </div>
        )
        :
        <LoadingComponent spinning={true}/>
};

export default SongCardDynamic;