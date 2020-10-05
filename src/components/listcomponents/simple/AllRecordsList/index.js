import React from "react";
import FetchAllRecords from "../../../../api-functions/Records";
import {LoadingComponent} from "../../../MicroComponents";
import DynamicCard from "../../../cardcomponents/simple/DynamicCard";
import RecordCard from "../../../cardcomponents/RecordCard";

const AllRecordsList = () => {
    const records = FetchAllRecords();
    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl}/>
                // <DynamicCard route="record" id={record.id} name={record.name}/>
            )}
        </div>)
        :
        (<LoadingComponent/>)
};

export default AllRecordsList;
