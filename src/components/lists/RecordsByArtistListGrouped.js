import React from "react";
import {LoadingComponent} from "../MicroComponents/MicroComponents";
import {FetchRecordsByArtist} from "../../api-functions/records-api";
import RecordCard from "../cards/RecordCard";
import * as COLUMNS from "../../constants/cols";
import Artist from "./ArtistItem";

const RecordsByArtistListGrouped = ({id}) => {
    const records = FetchRecordsByArtist(id);

    return records.length ?
        (<div className="row mb-4">

            <div className="col-12 w-100>">
                <h2 className="section-header"><Artist id={id}/></h2>
            </div>

            {records.map((record) =>
                <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl} key={record.id} year={record.year} format={record.format} columnClass={COLUMNS.RECORDS_MAIN} />
            )}


        </div>)
        :
        (<LoadingComponent text="There might not be any records at this time." icon="compact-disc" spinning={true}/>)
};

export default RecordsByArtistListGrouped;
