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
                <SongsByRecordList recordId={id}/>
            </div>
            <div className="standard-secondary-column order-1 order-lg-2 mb-5">
                <div className="standard-box-wrapper__near-dark">
                    <h1 className="text-capitalize mb-0">{record.name}</h1>

                    <p className="text-uppercase"><Artist id={record.artistId}/></p>


                    <img className="w-100 mb-5" alt={`Cover for ${record.name}`} src={record.coverUrl || imgUnavailable}/>

                    <CopyrightInfoComponent/>
                </div>
            </div>
        </div>
    )
        :
        <LoadingComponent/>;
};
export default RecordPage;
