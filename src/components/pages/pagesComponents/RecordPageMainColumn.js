import React, {useState} from "react";
import {CopyrightInformation} from "../../MicroComponents/MicroComponents";
import TrackPlayer from "../../cards/TrackPlayer";
import {TracksByRecordWithPlayer} from "../../lists/TracksByRecord";

const RecordPageMainColumn = ({id}) => {

    const [currentTrack, setCurrentTrack] = useState(null);
    const setCurrentTrackOnClick = (songId) => {
        setCurrentTrack(songId);
    }
    const destroyCurrentTrack = () => {
        setCurrentTrack(null);
    }

    return (
        <div className="standard-main-column">
            <div className="standard-main-column__section">
                <h2 className="section-header">Tracks</h2>

                <TracksByRecordWithPlayer recordId={id} currentTrack={currentTrack} setCurrentTrackOnClick={setCurrentTrackOnClick}/>
                {currentTrack ? <TrackPlayer id={currentTrack} key={currentTrack} destroyCurrentTrack={destroyCurrentTrack}/> : false}
            </div>
            <CopyrightInformation className={"d-block d-lg-none mt-5"}/>
        </div>
    )
}

export default RecordPageMainColumn;
