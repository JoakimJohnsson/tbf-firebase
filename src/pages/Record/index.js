import React from 'react';
import {CopyrightInfoComponent} from "../../components/MicroComponents";
import {FetchRecordFromId} from "../../api-functions/Records";
import SongsByRecordList from "../../components/listcomponents/simple/SongsByRecordList";

const RecordPage = ({match}) => {
    const {params: {id}} = match;
    const record = FetchRecordFromId(id);
    return (
        <div className="row">
            <div className="standard-main-column order-2 order-lg-1">
                {record.name}
            </div>
            <div className="standard-secondary-column order-1 order-lg-2 mb-5">
                <div className="standard-box-wrapper__near-dark">
                    <h1 className="text-capitalize">{record.name}</h1>

                    <h2>Songs</h2>
                    <SongsByRecordList recordId={id}/>
                    <CopyrightInfoComponent/>
                </div>
            </div>
        </div>
    );
};
export default RecordPage;
