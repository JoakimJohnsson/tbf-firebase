import React from "react";
import {LoadingComponent} from "../../../MicroComponents";
import DynamicCard from "../../../cardcomponents/simple/DynamicCard";
import {FetchRecordsByArtist} from "../../../../api-functions/Records";

const RecordsByArtistList = (props) => {
    const records = FetchRecordsByArtist(props.artistId);

    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <DynamicCard route="record" id={record.id} name={record.name}/>
            )}
        </div>)
        :
        (<LoadingComponent text="Trying to fetch records..."/>)
};

export default RecordsByArtistList;
