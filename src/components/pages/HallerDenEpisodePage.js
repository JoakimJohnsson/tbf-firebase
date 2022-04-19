import React, {useEffect, useState} from 'react';
import {getEpisodeById} from "../../haller-den-data/serviceFunctions";
import EpisodePageOpinions from "../haller-den-components/EpisodeCardOpinions";
import * as ROUTES from "../../constants/routes";
import IconLink from "../microComponents/Links/IconLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const HallerDenEpisodePage = ({match}) => {

    const [episode, setEpisode] = useState([]);
    const {params: {id}} = match;

    useEffect(() => {
        setEpisode(getEpisodeById(id))
    }, [id]);

    return (
        <main className="container-fluid standard-container bg-light text-black">
            <div className={"row"}>
                <div className={"col-12"}>
                    <Link className={"btn btn-primary mb-3"} to={ROUTES.HALLER_DEN}><FontAwesomeIcon icon={"chevron-left"} className={"mr-2"}/>Tillbaka</Link>
                    <h1>{episode.movieName} </h1>
                    {
                        episode.opinions &&
                        episode.opinions.map(opinion => <EpisodePageOpinions key={opinion.participantId} opinion={opinion}/>)
                    }
                </div>
            </div>
        </main>
    );
};

export default HallerDenEpisodePage;
