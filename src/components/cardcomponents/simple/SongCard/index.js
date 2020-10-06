import React from 'react';
import Artist from "../../../listcomponents/single/Artist";

const SongCard = (props) => {

    let rand = Math.floor(Math.random() * 4) + 1;

    return (
        <div className={props.columnClass} key={props.id}>
            <div className={`song-card__simple p-3 text-color-variant__${rand.toString()}`}>
                <p className="label mb-1"><Artist id={props.artistId}/></p>
                <p className="small mb-3">{props.name}</p>

                <audio controls className="w-100">
                    <source src={props.url} type="audio/mpeg"/>
                    <p>
                        Your browser doesn't support HTML5 audio. Here is a <a href={props.url}>link to the
                        audio</a> instead.
                    </p>
                </audio>
            </div>
        </div>
    )
};

export default SongCard;