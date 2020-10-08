import React from 'react';
import {CopyrightInfoComponent, LoadingComponent} from "../components/MicroComponents/MicroComponents";
import {FetchRecordFromId} from "../api-functions/records-api";
import SongsByRecordList from "../components/listcomponents/simple/SongsByRecordList";
import imgUnavailable from "../images/image_unavailable.png";
import Artist from "../components/listcomponents/single/ArtistItem";

const RecordPage = ({match}) => {
    const {params: {id}} = match;
    const record = FetchRecordFromId(id);

    return record.artistId ? (
        <div className="row">
            <div className="standard-main-column order-2 order-lg-1">
                <h2>Tracks</h2>
                <SongsByRecordList recordId={id}/>
                <CopyrightInfoComponent className={"d-block d-lg-none mt-5"}/>
            </div>
            <div className="standard-secondary-column order-1 order-lg-2">
                <div className="standard-box-wrapper__near-dark">
                    <h1 className="text-capitalize mb-0">{record.name}</h1>
                    <p className="text-uppercase"><Artist id={record.artistId}/></p>
                    <img className="w-100 mb-0 mb-lg-5" alt={`Cover for ${record.name}`} src={record.coverUrl || imgUnavailable}/>
                    <CopyrightInfoComponent className={"d-none d-lg-block"}/>
                </div>
            </div>
        </div>
    )
        :
        <LoadingComponent/>;
};
export default RecordPage;
