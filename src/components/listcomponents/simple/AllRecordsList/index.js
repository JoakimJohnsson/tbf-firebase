import React from "react";
import FetchAllRecords from "../../../../api-functions/Records";
import {LoadingComponent} from "../../../MicroComponents";
import RecordCard from "../../../cardcomponents/RecordCard";
import * as COLUMNS from '../../../../constants/columns';

const AllRecordsList = () => {
    const records = FetchAllRecords();
    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl} columnClass={COLUMNS.RECORDS_MAIN}/>
            )}
        </div>)
        :
        (<LoadingComponent/>)
};

export default AllRecordsList;
