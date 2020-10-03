import React from "react";
import FetchAllRecords from "../../../../api-functions/Records";
import SongsByRecordList from "../SongsByRecordList";

const AllRecordsList = () => {
    const records = FetchAllRecords();
    return (
        <ul>
            {records.map((record) =>
                <li key={record.id}>
                    {record.name}
                    <SongsByRecordList recordId={record.id}/>
                </li>
            )}
        </ul>
    )
};

export default AllRecordsList;
