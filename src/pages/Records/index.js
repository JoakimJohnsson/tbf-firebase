import React from 'react';
import {CopyrightInfoComponent} from "../../components/MicroComponents";
import AllRecordsList from "../../components/listcomponents/simple/AllRecordsList";

const RecordsPage = () => (
    <div className="row no-gutters">
        <h1>Records</h1>
        <div className="col-12 mb-5">
            <AllRecordsList />
        </div>
        <CopyrightInfoComponent />
    </div>
);

export default RecordsPage;
