import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FilterInput = ({filter, setFilter, placeHolder}) => {

    const clearInput = () => {
        setFilter('')
    }

    return (
        <div className="sticky-top top-1">
            <div className="input-group col-12 col-sm-8 col-lg-6">
                <div className="input-group-prepend">
                    <span className="input-group-text"><FontAwesomeIcon icon={"filter"}/></span>
                </div>
                <input id="filter"
                       name="filter"
                       type="text"
                       className="form-control small"
                       placeholder={placeHolder}
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
        </div>
    )
};


export default FilterInput;
