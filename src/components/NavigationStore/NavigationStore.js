import React, { useState } from "react";

export const NavigationContext = React.createContext();

const NavigationStore = ({ children }) => {
    const [hideNavs, setHideNavs] = useState(false);
    const [showHallerDenNavs, setShowHallerDenNavs] = useState(false);
    return (
        <NavigationContext.Provider value={[hideNavs, setHideNavs, showHallerDenNavs, setShowHallerDenNavs]}>
            { children }
        </NavigationContext.Provider>
    )
}

export default NavigationStore;
