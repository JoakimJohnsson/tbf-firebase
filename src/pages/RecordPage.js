import React from 'react';
import {
    CopyrightInfoComponent,
    FormatInfoComponent,
    LoadingComponent
} from "../components/MicroComponents/MicroComponents";
import {FetchRecordFromId} from "../api-functions/records-api";
import SongsByRecordList, {SongsByRecordListSimple} from "../components/lists/SongsByRecordList";
import imgUnavailable from "../images/image_unavailable.png";
import Artist from "../components/lists/ArtistItem";
import * as STRINGS from "../constants/strings";

const RecordPage = ({match}) => {
    const {params: {id}} = match;
    const record = FetchRecordFromId(id);

    return record.artistId ? (
            <div className="row">
                <div className="standard-secondary-column">
                    <div className="standard-box-wrapper__near-dark">
                        <h1 className="text-capitalize mb-0">{record.name}</h1>
                        <p className="text-uppercase mb-0"><Artist id={record.artistId}/></p>
                        <p className="small">{record.format ? <FormatInfoComponent format={record.format} text/> : ""} {record.year ? `${record.year}` : ""}</p>

                        <img className="w-100 mb-3 mb-lg-5" alt={`Cover for ${record.name}`}
                             src={record.coverUrl || imgUnavailable}/>

                        <h2>Description</h2>
                        <p>
                            <span className="text-capitalize">{record.name} </span>
                            {record.description !== ""
                                ? record.description
                                : record.coverUrl === ""
                                    ? STRINGS.DEFAULT_RECORD_DESCRIPTION_MISSING_IMAGE
                                    : STRINGS.DEFAULT_RECORD_DESCRIPTION}
                        </p>

                        <h2>Track list</h2>

                        <SongsByRecordListSimple recordId={id}/>

                        <CopyrightInfoComponent className={"d-none d-lg-block"}/>
                    </div>
                </div>
                <div className="standard-main-column">
                    <div className="standard-main-column__section">
                        <h2 className="section-header">Tracks</h2>
                        <SongsByRecordList recordId={id}/>
                    </div>
                    <CopyrightInfoComponent className={"d-block d-lg-none mt-5"}/>
                </div>

            </div>
        )
        :
        <LoadingComponent spinning={true}/>;
};
export default RecordPage;
