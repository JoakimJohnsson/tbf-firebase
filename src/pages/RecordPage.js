import React, {useState} from 'react';
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
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Collapse} from "react-bootstrap";

const RecordPage = ({match}) => {
    const {params: {id}} = match;
    const record = FetchRecordFromId(id);
    const [open, setOpen] = useState(false);

    return record.artistId ? (
            <div className="row">
                <div className="standard-secondary-column">
                    <div className="standard-box-wrapper__near-dark">
                        <div className="d-flex justify-content-between">
                            <div className="mr-3">
                                <h1 className="text-capitalize mb-0">{record.name}</h1>
                                <p className="text-uppercase mb-0"><Artist id={record.artistId}/></p>
                                <p className="small m-0">{record.format ?
                                    <FormatInfoComponent format={record.format} text/> : ""} {record.year ? `${record.year}` : ""}</p>
                            </div>
                            <div>
                                <button onClick={() => setOpen(!open)} className="btn w-100 button__show-more fs-lg mb-2 d-block d-lg-none"
                                        data-toggle="collapse" aria-expanded="false"
                                        aria-controls={`collapse-${id}-info`}>
                                    <FontAwesomeIcon icon={ open ? "arrow-alt-circle-up" : "arrow-alt-circle-down"} aria-label="Show record information"/>
                                </button>
                            </div>
                        </div>

                        <Collapse in={open} className={"dont-collapse-sm"}>
                            <div id={`collapse-${id}-info`}>
                                <img className="w-100 my-3 mb-lg-5" alt={`Cover for ${record.name}`}
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
                        </Collapse>

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
