import React, {useContext, useEffect} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";

const HallerDenPage = () => {
    const setHideNavs = useContext(NavigationContext)[1];
    setHideNavs(true);
    const setShowHallerDenNav = useContext(NavigationContext)[3];

    useEffect(() =>
        setShowHallerDenNav(true)
    )

    return (
        <div className="container-fluid standard-container">
            <p>Håller den?</p>
        </div>
    );
};

export default HallerDenPage;
