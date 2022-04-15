import React, {useContext, useEffect, useState} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {getAllEpisodes, getAllParticipants} from "../../haller-den-data/serviceFunctions";
import EpisodeCard from "../haller-den-components/EpisodeCard";

const HallerDenPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const [participants, setParticipants] = useState([]);
    const setHideNavs = useContext(NavigationContext)[1];
    const setShowHallerDenNav = useContext(NavigationContext)[3];

    useEffect(() => {
        setHideNavs(true)
    }, []);

    useEffect(() => {
        setShowHallerDenNav(true)
    }, []);

    useEffect(() => {
        setEpisodes(getAllEpisodes)
    }, []);

    useEffect(() => {
        setParticipants(getAllParticipants)
    }, []);

    return (
        <div className="container-fluid standard-container">
            <div className={"row"}>
                {episodes.map( episode =>
                    <EpisodeCard key={episode.id} episode={episode}/>
                )}
            </div>
        </div>
    );
};

export default HallerDenPage;
