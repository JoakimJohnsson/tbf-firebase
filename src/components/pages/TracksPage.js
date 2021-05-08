import React, {useContext} from 'react';
import CopyrightInformation from "../microComponents/CopyrightInformation";
import AllTracksListByRecord from "../lists/AllTracks";
import TrackPlayer from "../cards/TrackPlayer";
import {Context} from "../MusicStore/MusicStore";

const TracksPage = () => {
    const [trackState] = useContext(Context);
    return (
        <div className="row no-gutters">
            <div className="col-12">
                <h1 className="mb-3">Tracks</h1>
            </div>
            <div className="col-12 mb-4">
                <AllTracksListByRecord/>
            </div>
            <div className="col-12">
                <CopyrightInformation/>
            </div>
            {trackState.currentTrack ? <TrackPlayer id={trackState.currentTrack} key={trackState.currentTrack} /> : false}
        </div>
    );
}

export default TracksPage;
