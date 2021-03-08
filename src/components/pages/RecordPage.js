import React from 'react';
import {LoadingStandard} from "../MicroComponents/MicroComponents";
import {FetchRecordFromId} from "../../api-functions/records-api";
import RecordPageMainColumn from "./pagesComponents/RecordPageMainColumn";
import RecordPageSecondaryColumn from "./pagesComponents/RecordPageSecondaryColumn";

const RecordPage = ({match}) => {
    const {params: {id}} = match;
    const record = FetchRecordFromId(id);

    return record.artistId ?
        (<div className="row">
            <RecordPageSecondaryColumn id={id} record={record}/>
            <RecordPageMainColumn id={id}/>
        </div>)
        :
        <LoadingStandard spinning={true}/>;
};
export default RecordPage;
