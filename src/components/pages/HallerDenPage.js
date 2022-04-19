import React, {useContext, useEffect, useState} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import EpisodeCard from "../haller-den-components/EpisodeCard";
import {Episodes} from "../../haller-den-data/data";
import FilterForm from "../haller-den-components/FilterForm";

const HallerDenPage = () => {
    const [episodes, setEpisodes] = useState([]);
    const setHideNavs = useContext(NavigationContext)[1];
    const setShowHallerDenNavs = useContext(NavigationContext)[3];
    const [filter, setFilter] = useState('');
    const [reverse, setReverse] = useState(false);
    const [sortType, setSortType] = useState("movieName");

    useEffect(() => {
        setHideNavs(true)
        setShowHallerDenNavs(true)
    }, [setHideNavs, setShowHallerDenNavs]);

    useEffect(() => {
        const sortArray = type => {
            const types = {
                movieName: 'movieName',
                movieYear: 'movieYear'
            };
            const sortProperty = types[type];
            let sorted;
            if (sortProperty === "movieName") {
                sorted = reverse ?
                    [...Episodes].sort((a, b) => a[sortProperty] < b[sortProperty])
                    :
                    [...Episodes].sort((a, b) => a[sortProperty] > b[sortProperty]);
            } else {
                sorted = reverse ?
                    [...Episodes].sort((a, b) => b[sortProperty] - a[sortProperty])
                    :
                    [...Episodes].sort((a, b) => a[sortProperty] - b[sortProperty]);
            }
            setEpisodes(sorted);
        };
        sortArray(sortType);
    }, [sortType, reverse]);

    return episodes && (
        <main className="container-fluid standard-container bg-light">
            <div className={"row"}>
                <div className={"col-12 mb-5"}>
                    <FilterForm filter={filter} setFilter={setFilter} setSortType={setSortType} reverse={reverse} setReverse={setReverse}/>
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
    )
        ;
};

export default HallerDenPage;
