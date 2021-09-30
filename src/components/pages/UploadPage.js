import React, {useContext, useEffect} from 'react';
import CopyrightInformation from "../microComponents/CopyrightInformation";
import TrackUploadForm from "../formsAndInputs/TrackUploadForm"
import RecordUploadForm from "../formsAndInputs/RecordUploadForm";
import LastUpdatedArtistForm from "../formsAndInputs/LastUpdatedArtistForm";
import {NavigationContext} from "../NavigationStore/NavigationStore";

const UploadPage = () => {
    const setHideNavs = useContext(NavigationContext)[1];
    useEffect(() =>
        setHideNavs(false)
    )

    return (
        <div className="container-fluid standard-container">
            <div className="row">
                <div className="standard-secondary-column">
                    <div className="standard-box-wrapper__near-dark">
                        <h1>Upload</h1>
                        <CopyrightInformation className={"d-none d-lg-block"}/>
                    </div>
                </div>
                <div className="standard-main-column">
                    <div className="standard-main-column__section">
                        <h2 className="section-header">Track</h2>
                        <TrackUploadForm/>

                        <h2 className="section-header">Record</h2>
                        <RecordUploadForm/>

                        <h2 className="section-header">Last updated artist</h2>
                        <LastUpdatedArtistForm/>

                    </div>
                    <CopyrightInformation className={"d-block d-lg-none mt-5"}/>
                </div>
            </div>
        </div>
    );
};

export default UploadPage;
