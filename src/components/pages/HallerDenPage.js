import React, {useContext, useEffect, useState} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import EpisodeCard from "../haller-den-components/EpisodeCard";
import {Episodes} from "../../haller-den-data/data";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                    [...Episodes].sort((a, b) => a[sortProperty] > b[sortProperty])
                    :
                    [...Episodes].sort((a, b) => a[sortProperty] < b[sortProperty]);
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

    const clearInput = () => {
        setFilter('')
    }

    return episodes && (
        <main className="container-fluid standard-container bg-light">
            <div className={"row"}>
                <div className={"col-12 mb-5"}>
                    <div className={"form-group"}>
                        <div className="input-group col-12 col-md-8 col-xl-6 mb-2">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><FontAwesomeIcon icon={"filter"}/></span>
                            </div>
                            <input id="filter"
                                   name="filter"
                                   type="text"
                                   className="form-control"
                                   placeholder={"Filtrera på namn eller årtal"}
                                   value={filter}
                                   onChange={event => setFilter(event.target.value)}
                            />
                            {filter !== '' ?
                                <div className="input-group-append">
                                    <button className="input-group-text" onClick={clearInput}><FontAwesomeIcon icon={"times"}/></button>
                                </div>
                                :
                                ''
                            }
                        </div>

                        <div className="input-group col-12 col-sm-8 col-lg-4">
                            <select className={"form-control mr-2"} onChange={(e) => setSortType(e.target.value)} aria-label="Default select example">
                                <option value="movieName">Namn</option>
                                <option value="movieYear">Årtal</option>
                            </select>
                            <button className={"btn btn-primary"} onClick={() => setReverse(!reverse)}>Omvänd ordning</button>
                        </div>
                    </div>
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
