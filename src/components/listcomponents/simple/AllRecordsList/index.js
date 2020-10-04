import React from "react";
import FetchAllRecords from "../../../../api-functions/Records";
import {LoadingComponent} from "../../../MicroComponents";
import DynamicCard from "../../../cardcomponents/simple/DynamicCard";

const AllRecordsList = () => {
    const records = FetchAllRecords();
    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <DynamicCard route="record" id={record.id} name={record.name}/>
            )}
        </div>)
        :
        (<LoadingComponent/>)
};

export default AllRecordsList;
