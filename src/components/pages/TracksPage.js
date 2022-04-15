import React, {useContext, useEffect} from 'react';
import CopyrightInformation from "../microComponents/CopyrightInformation";
import AllTracksWithFilter from "../lists/AllTracksWithFilter";
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {SetNewDocTitle} from "../microComponents/customHooks";

const TracksPage = () => {
    const setHideNavs = useContext(NavigationContext)[1];
    useEffect(() =>
        setHideNavs(false)
    )
    SetNewDocTitle("All tracks");
    return (
        <div className="container-fluid standard-container">
            <main className="row no-gutters pb-5">
                <div className="col-12">
                    <h1 className="mb-3">Tracks</h1>
                </div>
                <div className="col-12 mb-4">
                    <AllTracksWithFilter/>
                </div>
                <div className="col-12">
                    <CopyrightInformation/>
                </div>
            </main>
        </div>
    );
}

export default TracksPage;
