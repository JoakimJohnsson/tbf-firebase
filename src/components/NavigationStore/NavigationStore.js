import React, { useState } from "react";

const initialState = {
    hideNavs: false
}

export const NavigationContext = React.createContext();

const NavigationStore = ({ children }) => {
    const [hideNavs, setHideNavs] = useState(initialState);
    return (
        <NavigationContext.Provider value={[hideNavs, setHideNavs]}>
            { children }
        </NavigationContext.Provider>
    )
}

export default NavigationStore;
