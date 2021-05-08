import React from "react";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import FetchAllRecords from "../../api-functions/records-api";
import {RecordCardWithSongsWithImage} from "../cards/RecordCard";

const AllTracksListByRecord = () => {
    const records = FetchAllRecords();
    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <RecordCardWithSongsWithImage id={record.id} key={record.id} name={record.name} artistId={record.artistId}/>
            )}
        </div>)
        :
        (<LoadingStandard spinning={true} />)
};

export default AllTracksListByRecord;
