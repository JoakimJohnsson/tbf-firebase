import React from 'react';
import Artist from "../../listcomponents/single/ArtistItem";
import {FetchSongFromId} from "../../../api-functions/songs-api";
import {LoadingComponent} from "../../MicroComponents/MicroComponents";

const SongCard = (props) => {

    const song = FetchSongFromId(props.id)

    let rand = Math.floor(Math.random() * 4) + 1;

    return song.artistId ? (
        <div className={props.columnClass} key={song.id}>
            <div className={`song-card__simple p-3 mb-2 text-color-variant__${rand.toString()}`}>
                <div className="d-flex align-items-center mb-3">
                    <div className="h-100 mr-3 text">
                        <p className="card-index__round m-0">{song.index}</p>
                    </div>

                    <div>
                        <p className="label mb-1"><Artist id={song.artistId}/></p>
                        <p className="small mb-0">{song.name}</p>
                    </div>
                </div>

                <audio controls className="w-100">
                    <source src={song.url} type="audio/mpeg"/>
                    <p>
                        Your browser doesn't support HTML5 audio. Here is a <a href={props.url}>link to the
                        audio</a> instead.
                    </p>
                </audio>
            </div>
        </div>
    )
        :
        <LoadingComponent/>
};

export default SongCard;