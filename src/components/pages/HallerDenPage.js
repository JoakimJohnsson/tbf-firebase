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
                <div className={"col-12 col-sm-8 col-xl-6"}>
                    <h1 className={"text-black"}>Höll den, eller...?</h1>
                    <p className={"lead text-black"}>Håller den? är podden där roliga personer tittar på en film de gillade förut, och bestämmer sig för om den fortfarande håller. Här kan du se hur det gick.</p>
                </div>
                    <FilterForm filter={filter} setFilter={setFilter} setSortType={setSortType} sortType={sortType} reverse={reverse} setReverse={setReverse}/>
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
