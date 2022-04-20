import React, {useEffect, useState} from 'react';
import {getParticipantById} from "../../haller-den-data/serviceFunctions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const EpisodePageOpinions = ({opinion}) => {
    const [participant, setParticipant] = useState({});

    useEffect(() => {
        setParticipant(getParticipantById(opinion.participantId))
    }, [opinion.participantId]);

    return (
        <div className={"bg-light mb-2 text-center"}>
            <h2 className={opinion.opinion ? "mb-0 p-3 green-icon " : "mb-0 p-3 red-icon "}>
                <span className={"mr-2"}>{participant.firstName} {participant.lastName}</span>
                {opinion.opinion ?
                    <FontAwesomeIcon icon={"grin-hearts"} size="1x" aria-label={"håller"}/>
                    :
                    <FontAwesomeIcon icon={"frown"} size="1x" aria-label={"håller inte"}/>}
            </h2>
        </div>

    );
};
export default EpisodePageOpinions;
