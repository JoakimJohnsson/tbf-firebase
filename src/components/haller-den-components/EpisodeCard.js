import React, {useEffect, useState} from 'react';
import {hallerDenImages} from '../../haller-den-data/images';
import {getImageName, setImageInfo} from "../../haller-den-data/serviceFunctions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {HOLL_DEN} from "../../constants/routes";
import EpisodeCardOpinions from "./EpisodeCardOpinions";

const EpisodeCard = ({episode}) => {
    const trimmedMovieName = getImageName(episode.movieName);
    const movieImage = hallerDenImages[trimmedMovieName];
    const [imageInfoClass, setImageInfoClass] = useState("");
    const [imageInfoMessage, setImageInfoMessage] = useState("");
    const [imageInfoIcon, setImageInfoIcon] = useState("meh");

    useEffect(() => {
        setImageInfo(setImageInfoClass, setImageInfoMessage, setImageInfoIcon, episode)
    }, [episode]);

    return episode ?
        (
            <div className="hd-episode-card-wrapper col-12 col-md-6 col-xl-4 mb-4 mb-sm-5">
                <div className={"col-12 h-100"}>
                    <Link className={""} to={`${HOLL_DEN}/${episode.id}`}>
                        <div className={"card h-100"}>
                            <div className={"hd-episode-image-wrapper position-relative"}>
                                <img src={movieImage} className="card-img-top" alt={`Movie ${episode.movieName}`}/>
                                <div className={`hd-episode-image-info font-weight-bold ${imageInfoClass}`}>
                                    <FontAwesomeIcon icon={imageInfoIcon} size="2x" aria-label={imageInfoMessage}/>
                                </div>
                            </div>
                            <div className={"card-body d-flex flex-column justify-content-between"}>
                                <div>
                                    <h1 className={"card-title mb-0"}>{episode.movieName}</h1>
                                    <p className={"card-sub-title"}>{episode.movieYear}</p>
                                </div>
                                <div className={"text-center"}>
                                    <div className={"d-inline p-2 border-top border-light"}>
                                        {
                                            episode.opinions &&
                                            [...episode.opinions].sort((a, b) => a["opinion"] < b["opinion"]).map(opinion => <EpisodeCardOpinions key={opinion.participantId} opinion={opinion}/>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
        :
        (
            <p>Loading...</p>
        );
};
export default EpisodeCard;
