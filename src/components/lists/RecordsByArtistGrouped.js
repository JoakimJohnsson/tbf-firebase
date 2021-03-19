import React from "react";
import LoadingStandard from "../microComponents/LoadingStandard";
import {FetchRecordsByArtist} from "../../api-functions/records-api";
import RecordCard from "../cards/RecordCard";
import * as COLUMNS from "../../constants/cols";
import {ArtistLink} from "../apiComponents/ArtistComponents";

const RecordsByArtistGrouped = ({id}) => {
    const records = FetchRecordsByArtist(id);
    let rand = Math.floor(Math.random() * 16) + 1;
    let rand2 = Math.floor(Math.random() * 8) + 1;

    return records.length ?
        (<div className="row mb-4">

            <div className="col-12 w-100>">
                <h2 className={`section-header logo-font-family__${rand.toString()} text-color-variant__${rand2.toString()}`}><ArtistLink id={id}/></h2>
            </div>

            {records.map((record) =>
                <RecordCard route="record" id={record.id} name={record.name} artistId={record.artistId} coverUrl={record.coverUrl} key={record.id} year={record.year} format={record.format} columnClass={COLUMNS.RECORDS_MAIN} />
            )}


        </div>)
        :
        (<LoadingStandard text="There might not be any records at this time." icon="compact-disc" spinning={true}/>)
};

export default RecordsByArtistGrouped;
