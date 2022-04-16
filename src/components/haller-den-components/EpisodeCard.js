import React, {useEffect, useState} from 'react';
import {hallerDenImages} from '../../haller-den-data/images';
import {getImageName, hallerDenStatus} from "../../haller-den-data/serviceFunctions";
import EpisodeCardOpinions from "./EpisodeCardOpinions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EpisodeCard = ({episode}) => {
    const trimmedMovieName = getImageName(episode.movieName);
    const movieImage = hallerDenImages[trimmedMovieName];
    const [imageInfoClass, setImageInfoClass] = useState("");
    const [imageInfoMessage, setImageInfoMessage] = useState("");
    const [imageInfoIcon, setImageInfoIcon] = useState("");

    useEffect(() => {
        const status = hallerDenStatus(episode);
        if (status === 0) {
            setImageInfoClass("haller-lika");
            setImageInfoMessage("Lika");
            setImageInfoIcon("meh");
        } else if (status > 0) {
            setImageInfoClass("haller");
            setImageInfoMessage("Håller");
            setImageInfoIcon("grin-hearts");
        } else {
            setImageInfoClass("haller-inte");
            setImageInfoMessage("Håller inte");
            setImageInfoIcon("frown");
        }
    }, []);

    return (
        <div className="hd-episode-card-wrapper col-12 col-md-6 col-xl-4 mb-2 mb-sm-4">
            <div className={"col-12 h-100"}>
                <div className={"card h-100"}>
                    <div className={"hd-episode-image-wrapper position-relative"}>
                        <img src={movieImage} className="card-img-top" alt={`Movie ${episode.movieName}`}/>
                        <div className={`hd-episode-image-info font-weight-bold ${imageInfoClass}`}>
                            <FontAwesomeIcon icon={imageInfoIcon} size="2x" aria-label={imageInfoMessage}/>
                        </div>
                    </div>
                    <div className={"card-body"}>
                        <h1 className={"card-title mb-0"}>{episode.movieName}</h1>
                        <p className={"card-sub-title mb-0"}>{episode.movieYear}</p>
                        {episode.opinions.map(opinion =>
                            <EpisodeCardOpinions opinion={opinion}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default EpisodeCard;
