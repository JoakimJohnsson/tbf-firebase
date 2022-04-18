import React, {useEffect, useState} from 'react';
import {getEpisodeById} from "../../haller-den-data/serviceFunctions";
import EpisodePageOpinions from "../haller-den-components/EpisodeCardOpinions";

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
                    <h1>{episode.movieName}</h1>
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
