import React, {useState} from "react";
import {CopyrightInformation, FormatInformation} from "../../MicroComponents/MicroComponents";
import imgUnavailable from "../../../images/image_unavailable.png";
import {ArtistLink} from "../../apiComponents/ArtistComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Collapse} from "react-bootstrap";
import DefaultArtistDescription from "../../DefaultDescriptions/DefaultDescriptions";
import SongsByRecordListSimple from "../../lists/TracksByRecord";

const RecordPageSecondaryColumn = ({id, record}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="standard-secondary-column">
            <div className="standard-box-wrapper__near-dark">
                <div className="d-flex justify-content-between">
                    <div className="mr-3">
                        <h1 className="text-capitalize mb-0">{record.name}</h1>
                        <p className="text-uppercase mb-0"><ArtistLink id={record.artistId}/></p>
                        <p className="small m-0">
                            {record.format ? <FormatInformation format={record.format} text/> : ""}
                            {record.year ? `${record.year}` : ""}
                        </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <button onClick={() => setOpen(!open)}
                                className="btn button__show-more d-flex align-items-center justify-content-center d-lg-none"
                                data-toggle="collapse" aria-expanded="false"
                                aria-controls={`collapse-${id}-info`}>
                            <FontAwesomeIcon icon={open ? "chevron-up" : "chevron-down"} aria-label="Show record information"/>
                        </button>
                    </div>
                </div>

                <Collapse in={open} className={"dont-collapse-sm"}>
                    <div id={`collapse-${id}-info`}>
                        <img className="w-100 my-3 mb-lg-5" alt={`Cover for ${record.name}`}
                             src={record.coverUrl || imgUnavailable}/>
                        <h2>Description</h2>
                        <p>
                            {record.description !== "" ?
                                record.description
                                :
                                <DefaultArtistDescription record={record}/>}
                        </p>
                        <h2>Track list</h2>
                        <SongsByRecordListSimple recordId={id}/>
                        <CopyrightInformation className={"d-none d-lg-block"}/>
                    </div>
                </Collapse>

            </div>
        </div>
    )
}

export default RecordPageSecondaryColumn;
