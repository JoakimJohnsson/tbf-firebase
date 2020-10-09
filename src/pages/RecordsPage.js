import React from 'react';
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import AllRecordsList from "../components/lists/AllRecordsList";
import * as COLUMNS from "../constants/cols"

const RecordsPage = () => (
    <div className="row no-gutters">
        <h1>Records</h1>
        <div className="col-12 mb-5">
            <AllRecordsList columnClass={COLUMNS.RECORDS_FULLWIDTH}/>
        </div>
        <CopyrightInfoComponent />
    </div>
);

export default RecordsPage;
