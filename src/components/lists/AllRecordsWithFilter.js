import React, {useState} from "react";
import {FetchAllRecords} from "../../api-functions/api";
import LoadingLazyBackground from "../microComponents/Loading/LoadingLazyBackground";
import RecordCard from "../cards/RecordCard";
import {prepareFilterText} from "../microComponents/microComponentsHelper";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AllRecordsWithFilter = ({fullWidth}) => {
    const [filter, setFilter] = useState('');
    const records = FetchAllRecords();
    const clearInput = () => {
        setFilter('')
    }

    return records.length ?
        (
            <>
                <div className="input-group col-12 col-sm-8 col-lg-6">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><FontAwesomeIcon icon={"filter"}/></span>
                    </div>
                    <input id="filter"
                           name="filter"
                           type="text"
                           className="form-control small"
                           placeholder="Filter by artist, record or year"
                           value={filter}
                           onChange={event => setFilter(event.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="input-group-text" onClick={clearInput}><FontAwesomeIcon icon={"times"}/></button>
                    </div>
                </div>
                <div className="row">
                    {records.filter(record => record.name.toLowerCase().includes(filter.toLowerCase()) ||
                        record.artistId.toLowerCase().includes(prepareFilterText(filter)) ||
                        record.year.toString().toLowerCase().includes(prepareFilterText(filter)) || filter === '')
                        .map(record =>
                        <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl}
                                    fullWidth={fullWidth} year={record.year} format={record.format} key={record.id}/>
                    )}
                </div>
            </>
        )
        :
        (<LoadingLazyBackground/>)
};

export default AllRecordsWithFilter;
