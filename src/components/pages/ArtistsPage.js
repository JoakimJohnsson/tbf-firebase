import React, {useContext, useEffect} from 'react';
import CopyrightInformation from "../microComponents/CopyrightInformation";
import AllArtistsWithFilter from "../lists/AllArtistsWithFilter";
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {SetNewDocTitle} from "../microComponents/customHooks";

const ArtistsPage = () => {
    const setHideNavs = useContext(NavigationContext)[1];
    useEffect(() =>
        setHideNavs(false)
    )
    SetNewDocTitle("All artists");
    return (
        <div className="container-fluid standard-container">
            <main className="row no-gutters pb-5">
                <div className="col-12">
                    <h1 className="mb-3">Artists</h1>
                </div>
                <div className="col-12 mb-4">
                    <AllArtistsWithFilter/>
                </div>
                <div className="col-12">
                    <CopyrightInformation/>
                </div>
            </main>
        </div>
    )
};
export default ArtistsPage;
