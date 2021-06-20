import React from 'react';
import CopyrightInformation from "../microComponents/CopyrightInformation";
import AllRecordsWithFilter from "../lists/AllRecordsWithFilter";

const RecordsPage = () => (
    <div className="row no-gutters">
        <div className="col-12">
            <h1 className="mb-3">Records</h1>
        </div>
        <div className="col-12 mb-4">
            <AllRecordsWithFilter fullWidth/>
        </div>
        <div className="col-12">
            <CopyrightInformation/>
        </div>
    </div>
);

export default RecordsPage;
