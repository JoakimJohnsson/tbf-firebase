import React from 'react';
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import SongUploadForm from "../components/Forms/SongUploadForm"

const UploadPage = () => {

    return (
        <div className="row">

            <div className="standard-secondary-column">
                <div className="standard-box-wrapper__near-dark">
                    <h1>Upload</h1>
                    <CopyrightInfoComponent className={"d-none d-lg-block"}/>
                </div>
            </div>
            <div className="standard-main-column">
                <div className="standard-main-column__section">
                    <h2 className="section-header">Song</h2>

                    <SongUploadForm/>

                </div>
                <CopyrightInfoComponent className={"d-block d-lg-none mt-5"}/>
            </div>

        </div>
    );
};

export default UploadPage;
