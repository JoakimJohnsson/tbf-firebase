import React, {useEffect, useState} from 'react';
import {getParticipantById} from "../../haller-den-data/serviceFunctions";

const EpisodePageOpinions = ({opinion}) => {
    const [participant, setParticipant] = useState({});

    useEffect(() => {
        setParticipant(getParticipantById(opinion.participantId))
    }, [opinion.participantId]);

    return (
        <p className="mb-0">
            {participant.id} {participant.firstName} {participant.lastName} {opinion.opinion ? "Håller" : "Håller inte"}
        </p>
    );
};
export default EpisodePageOpinions;
