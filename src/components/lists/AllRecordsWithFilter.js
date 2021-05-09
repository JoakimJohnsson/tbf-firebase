import React, {useState} from "react";
import {FetchAllRecords} from "../../api-functions/api";
import LoadingLazyBackground from "../microComponents/Loading/LoadingLazyBackground";
import RecordCard from "../cards/RecordCard";

const AllRecordsWithFilter = ({fullWidth}) => {
    const [filter, setFilter] = useState('');
    const records = FetchAllRecords();
    return records.length ?
        (
            <>
                <div className="col-12 col-sm-8 col-lg-6">
                    <label className="form-label">Type to filter records:</label>
                    <input id="filter"
                           name="filter"
                           type="text"
                           className="form-control"
                           value={filter}
                           onChange={event => setFilter(event.target.value)}
                    />
                </div>
                <div className="row">
                    {records.filter(record => record.name.toLowerCase().includes(filter.toLowerCase()) ||
                        record.artistId.toLowerCase().includes(filter.toLowerCase()) || filter === '')
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
