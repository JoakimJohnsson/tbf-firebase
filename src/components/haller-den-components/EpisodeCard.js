import React from 'react';
import {hallerDenImages} from '../../haller-den-data/images';
import {getImageName} from "../../haller-den-data/serviceFunctions";

const EpisodeCard = ({episode}) => {
    const trimmedMovieName = getImageName(episode.movieName);
    const movieImage = hallerDenImages[trimmedMovieName];
    return (
        <div className="hd-episode-card-wrapper col-12 col-md-6 col-xl-4 mb-2 mb-sm-4">
            <div className={"card col-12"}>
                <img src={movieImage} className="card-img-top" alt={`Movie ${episode.movieName}`}/>
                <div className={"card-body"}>
                    <h1 className={"card-title mb-0"}>{episode.movieName}</h1>
                    <p className={"card-sub-title mb-0"}>{episode.movieYear}</p>
                    <p className={"card-sub-title text-lowercase"}>{getImageName(episode.movieName)}</p>
                </div>
            </div>
        </div>
    );
};
export default EpisodeCard;
