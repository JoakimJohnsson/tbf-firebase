import React from 'react';
import {clearInput} from "../../haller-den-data/serviceFunctions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const FilterForm = ({filter, setFilter, setSortType, reverse, setReverse}) => {


    return (
        <div className={"form-group"}>

            <div className="col-12 col-md-8 col-xl-6 mb-2">
                <label className={"text-black"} htmlFor="filter">Filtrera</label>
                <div className="input-group">
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
                            <button className="btn btn-primary" onClick={() => clearInput(setFilter)}>
                                <FontAwesomeIcon icon={"times"} className={"mr-2"}/>
                                Rensa
                            </button>
                        </div>
                        :
                        ''
                    }
                </div>
            </div>


            <div className="col-12 col-sm-8 col-lg-4">
                <label className={"text-black"} htmlFor="filter-sort-select">Välj sortering</label>
                <div className="input-group">
                    <select id={"filter-sort-select"} className={"form-control"} onChange={(e) => setSortType(e.target.value)}
                            aria-label="Default select example">
                        <option value="movieName">Namn</option>
                        <option value="movieYear">Årtal</option>
                    </select>
                    <div className={"input-group-append"}>
                        <button
                            className={reverse ? "btn btn-primary text-black" : "btn btn-outline-primary text-black"}
                            onClick={() => setReverse(!reverse)}
                            aria-label={"Omvänd ordning"}>
                            {
                                reverse ?
                                    <FontAwesomeIcon icon={"arrow-down"} className={"mr-2"}/>
                                    :
                                    <FontAwesomeIcon icon={"arrow-up"} className={"mr-2"}/>
                            }
                            Omvänd ordning
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )

};
export default FilterForm;
