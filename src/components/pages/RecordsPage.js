import React, {useContext, useEffect} from 'react';
import CopyrightInformation from "../microComponents/CopyrightInformation";
import AllRecordsWithFilter from "../lists/AllRecordsWithFilter";
import {NavigationContext} from "../NavigationStore/NavigationStore";

const RecordsPage = () => {
    const setHideNavs = useContext(NavigationContext)[1];
    useEffect(() =>
        setHideNavs(false)
    )

    return (
        <main className="row no-gutters">
            <div className="col-12">
                <h1 className="mb-3">Records</h1>
            </div>
            <div className="col-12 mb-4">
                <AllRecordsWithFilter fullWidth/>
            </div>
            <div className="col-12">
                <CopyrightInformation/>
            </div>
        </main>
    )
};

export default RecordsPage;
