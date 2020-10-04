import React from 'react';
import Artist from "../../../listcomponents/single/Artist";

const SongCard = (props) => {

    return (
        <div className="col-12 col-md-6 p-3" key={props.id}>
            <div className="song-card__simple p-3">
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