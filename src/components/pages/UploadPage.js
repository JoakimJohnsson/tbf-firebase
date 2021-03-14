import React from 'react';
import CopyrightInformation from "../microComponents/CopyrightInformation";
import SongUploadForm from "../forms/TrackUploadForm"
import RecordUploadForm from "../forms/RecordUploadForm";
import LastUpdatedArtistForm from "../forms/LastUpdatedArtistForm";

const UploadPage = () => {

    return (
        <div className="row">

            <div className="standard-secondary-column">
                <div className="standard-box-wrapper__near-dark">
                    <h1>Upload</h1>
                    <CopyrightInformation className={"d-none d-lg-block"}/>
                </div>
            </div>
            <div className="standard-main-column">
                <div className="standard-main-column__section">
                    <h2 className="section-header">Song</h2>
                    <SongUploadForm/>

                    <h2 className="section-header">Record</h2>
                    <RecordUploadForm/>

                    <h2 className="section-header">Last updated artist</h2>
                    <LastUpdatedArtistForm/>

                </div>
                <CopyrightInformation className={"d-block d-lg-none mt-5"}/>
            </div>

        </div>
    );
};

export default UploadPage;
