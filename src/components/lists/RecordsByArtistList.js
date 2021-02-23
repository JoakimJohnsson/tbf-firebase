import React from "react";
import {LoadingComponentStandard} from "../MicroComponents/MicroComponents";
import {FetchRecordsByArtist} from "../../api-functions/records-api";
import RecordCard from "../cards/RecordCard";
import * as COLUMNS from "../../constants/cols";

const RecordsByArtistList = ({artistId}) => {
    const records = FetchRecordsByArtist(artistId);

    return records.length ?
        (<div className="row mb-4">
            {records.map((record) =>
                <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl} key={record.id} year={record.year} format={record.format} columnClass={COLUMNS.RECORDS_MAIN} />
            )}
        </div>)
        :
        (<LoadingComponentStandard text="There might not be any records at this time." icon="compact-disc" spinning={true}/>)
};

export default RecordsByArtistList;
