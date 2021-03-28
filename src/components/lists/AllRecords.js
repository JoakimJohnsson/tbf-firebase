import React from "react";
import FetchAllRecords from "../../api-functions/records-api";
import LoadingLazyBackground from "../microComponents/Loading/LoadingLazyBackground";
import RecordCard from "../cards/RecordCard";

const AllRecords = ({fullWidth}) => {

    const records = FetchAllRecords();
    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl} fullWidth={fullWidth} year={record.year} format={record.format} key={record.id}/>
            )}
        </div>)
        :
        (<LoadingLazyBackground />)
};

export default AllRecords;
