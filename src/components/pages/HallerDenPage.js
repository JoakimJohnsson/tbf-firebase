import React, {useContext, useEffect, useState} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {getAllEpisodes, getAllParticipants} from "../../haller-den-data/serviceFunctions";

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
            <p>Håller den?</p>
            <p>{episodes.length}</p>
            <p>{participants.length}</p>
            <p>{episodes[0].movieName}</p>
        </div>
    );
};

export default HallerDenPage;
