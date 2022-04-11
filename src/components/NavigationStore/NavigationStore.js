import React, { useState } from "react";

export const NavigationContext = React.createContext();

const NavigationStore = ({ children }) => {
    const [hideNavs, setHideNavs] = useState(false);
    const [showHallerDenNav, setShowHallerDenNav] = useState(false);
    return (
        <NavigationContext.Provider value={[hideNavs, setHideNavs, showHallerDenNav, setShowHallerDenNav]}>
            { children }
        </NavigationContext.Provider>
    )
}

export default NavigationStore;
