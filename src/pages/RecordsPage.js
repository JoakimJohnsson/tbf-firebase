import React from 'react';
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import AllRecordsList from "../components/lists/AllRecordsList";

const RecordsPage = () => (
    <div className="row no-gutters">
        <h1>All available records</h1>
        <div className="col-12 mb-5">
            <AllRecordsList fullWidth/>
        </div>
        <CopyrightInfoComponent />
    </div>
);

export default RecordsPage;
