import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EpisodeCardOpinions = ({opinion}) => {

    return (
        opinion.opinion ?
            <FontAwesomeIcon className={"mx-1 green-icon"} icon={"grin-hearts"} size="1x" aria-label={"Håller"}/>
            :
            <FontAwesomeIcon className={"mx-1 red-icon"} icon={"frown"} size="1x" aria-label={"Håller inte"}/>
    );
};
export default EpisodeCardOpinions;
