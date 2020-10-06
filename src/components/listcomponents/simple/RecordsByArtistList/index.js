import React from "react";
import {LoadingComponent} from "../../../MicroComponents";
import {FetchRecordsByArtist} from "../../../../api-functions/Records";
import RecordCard from "../../../cardcomponents/RecordCard";
import * as COLUMNS from "../../../../constants/columns";

const RecordsByArtistList = (props) => {
    const records = FetchRecordsByArtist(props.artistId);

    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl} columnClass={COLUMNS.RECORDS_FULLWIDTH} />
            )}
        </div>)
        :
        (<LoadingComponent text="Trying to fetch records..."/>)
};

export default RecordsByArtistList;
