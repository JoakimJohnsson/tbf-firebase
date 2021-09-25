import React, { useState } from "react";

const initialState = {
    globalTrackList: []
}

export const GlobalTrackContext = React.createContext();

const GlobalTrackStore = ({ children }) => {
    const [globalTrackList, setGlobalTrackList] = useState(initialState);
    return (
        <GlobalTrackContext.Provider value={[globalTrackList, setGlobalTrackList]}>
            { children }
        </GlobalTrackContext.Provider>
    )
}

export default GlobalTrackStore;
