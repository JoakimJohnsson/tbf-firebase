import React, {useState} from "react";
import {FetchAllRecords} from "../../api-functions/api";
import LoadingLazyBackground from "../microComponents/Loading/LoadingLazyBackground";
import RecordCard from "../cards/RecordCard";
import {prepareFilterText} from "../microComponents/microComponentsHelper";
import FilterInput from "../formsAndInputs/FilterInput";

const AllRecordsWithFilter = ({fullWidth}) => {
    const [filter, setFilter] = useState('');
    const records = FetchAllRecords();

    return records.length ?
        (
            <>
                <FilterInput filter={filter} setFilter={setFilter} placeHolder={"Filter by artist, record or year"}/>
                <div className="row">
                    {records.filter(record => record.name.toLowerCase().includes(filter.toLowerCase()) ||
                        prepareFilterText(record.artistId).includes(prepareFilterText(filter)) ||
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
