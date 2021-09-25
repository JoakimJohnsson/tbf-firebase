import React, {useContext, useEffect} from 'react';
import CopyrightInformation from "../microComponents/CopyrightInformation";
import AllArtistsWithFilter from "../lists/AllArtistsWithFilter";
import {NavigationContext} from "../NavigationStore/NavigationStore";

const ArtistsPage = () => {
    const setHideNavs = useContext(NavigationContext)[1];
    useEffect(() =>
        setHideNavs(false)
    )
    return (
        <main className="row no-gutters">
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
    )
};
export default ArtistsPage;
