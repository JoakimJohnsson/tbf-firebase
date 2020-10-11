import React from "react";
import {LoadingComponent} from "../MicroComponents/MicroComponents";
import {FetchRecordsByArtist} from "../../api-functions/records-api";
import RecordCard from "../cards/RecordCard";
import * as COLUMNS from "../../constants/cols";

const RecordsByArtistList = (props) => {
    const records = FetchRecordsByArtist(props.artistId);

    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl} columnClass={COLUMNS.RECORDS_MAIN} />
            )}
        </div>)
        :
        (<LoadingComponent text="There might not be any records at this time." icon="compact-disc" spinning={true}/>)
};

export default RecordsByArtistList;
