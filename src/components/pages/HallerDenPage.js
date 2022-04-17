import React, {useContext, useEffect, useState} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {getAllEpisodes} from "../../haller-den-data/serviceFunctions";
import EpisodeCard from "../haller-den-components/EpisodeCard";
import FilterInput from "../formsAndInputs/FilterInput";

const HallerDenPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const setHideNavs = useContext(NavigationContext)[1];
    const setShowHallerDenNavs = useContext(NavigationContext)[3];
    const [filter, setFilter] = useState('');

    useEffect(() => {
        setHideNavs(true)
        setShowHallerDenNavs(true)
    }, []);

    useEffect(() => {
        setEpisodes(getAllEpisodes)
    }, []);

    return (
        <main className="container-fluid standard-container bg-light">
            <div className={"row"}>
                <div className={"col-12 mb-5"}>
                    <FilterInput filter={filter} setFilter={setFilter} placeHolder={"Filtrera på namn eller årtal"}/>
                </div>

                {episodes
                    .filter(episode => episode.movieName.toLowerCase()
                        .includes(filter.toLowerCase()) ||
                        episode.movieYear.toLowerCase()
                            .includes(filter.toLowerCase()) ||
                        filter === '')
                    .map(episode =>
                    <EpisodeCard key={episode.id} episode={episode}/>
                )}
            </div>
        </main>
    );
};

export default HallerDenPage;
