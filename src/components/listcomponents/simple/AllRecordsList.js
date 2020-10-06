import React from "react";
import FetchAllRecords from "../../../api-functions/records-api";
import {LoadingComponent} from "../../MicroComponents/MicroComponents";
import RecordCard from "../../cardcomponents/RecordCard";

const AllRecordsList = (props) => {
    const records = FetchAllRecords();
    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl} columnClass={props.columnClass} key={record.id}/>
            )}
        </div>)
        :
        (<LoadingComponent/>)
};

export default AllRecordsList;
