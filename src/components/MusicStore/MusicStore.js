import React, { useState } from "react";

const initialState = {
    currentTrack: null
}

export const Context = React.createContext();

const MusicStore = ({ children }) => {
    const [trackState, setTrackState] = useState(initialState);
    return (
        <Context.Provider value={[trackState, setTrackState]}>
            { children }
        </Context.Provider>
    )
}

export default MusicStore;