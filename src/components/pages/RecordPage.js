import React, {useContext, useEffect, useState} from 'react';
import FormatInformation from "../microComponents/FormatInformation";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import {FetchRecordFromId} from "../../api-functions/api";
import {ArtistLink} from "../apiComponents/ArtistComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Collapse} from "react-bootstrap";
import imgUnavailable from "../../images/image_unavailable.png";
import TracksByRecordListSimple, {TracksByRecordWithPlayer} from "../lists/TracksByRecord";
import CopyrightInformation from "../microComponents/CopyrightInformation";
import RecordDescription from "../microComponents/Descriptions/RecordDescription";
import {NavigationContext} from "../NavigationStore/NavigationStore";

const RecordPage = ({match}) => {
    const setHideNavs = useContext(NavigationContext)[1];
    useEffect(() =>
        setHideNavs(false)
    )
    const {params: {id}} = match;
    const record = FetchRecordFromId(id);
    const [open, setOpen] = useState(false);

    return record.artistId ?
        (<div className="container-fluid standard-container">
            <div className="row">
                <div className="standard-secondary-column">
                    <div className="standard-box-wrapper__near-dark">
                        <div className="d-flex justify-content-between">
                            <div className="mr-3">
                                <h1 className="text-capitalize mb-0">{record.name}</h1>
                                <p className="text-uppercase mb-0"><ArtistLink id={record.artistId} className={"text-uppercase"}/></p>
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

                                <RecordDescription record={record}/>

                                <h2>Track list</h2>
                                <TracksByRecordListSimple recordId={id}/>
                                <CopyrightInformation className={"d-none d-lg-block"}/>
                            </div>
                        </Collapse>

                    </div>
                </div>
                <div className="standard-main-column">
                    <div className="standard-main-column__section">
                        <h2 className="section-header">Tracks</h2>
                        <TracksByRecordWithPlayer recordId={id}/>
                    </div>
                    <CopyrightInformation className={"d-block d-lg-none mt-5"}/>
                </div>
            </div>
        </div>)
        :
        <LoadingStandard spinning={true}/>;
};
export default RecordPage;
