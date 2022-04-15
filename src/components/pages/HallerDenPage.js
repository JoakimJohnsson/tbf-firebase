import React, {useContext, useEffect, useState} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {getAllEpisodes, getAllParticipants} from "../../haller-den-data/serviceFunctions";
import EpisodeCard from "../haller-den-components/EpisodeCard";

const HallerDenPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [participants, setParticipants] = useState([]);
    const setHideNavs = useContext(NavigationContext)[1];
    const setShowHallerDenNavs = useContext(NavigationContext)[3];

    useEffect(() => {
        setHideNavs(true)
        setShowHallerDenNavs(true)
    }, []);

    useEffect(() => {
        setEpisodes(getAllEpisodes)
    }, []);

    useEffect(() => {
        setParticipants(getAllParticipants)
    }, []);

    return (
        <main className="container-fluid standard-container">
            <div className={"row"}>
                {episodes.map(episode =>
                    <EpisodeCard key={episode.id} episode={episode}/>
                )}
            </div>
        </main>
    );
};

export default HallerDenPage;
