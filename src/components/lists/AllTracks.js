import React from "react";
import FetchAllTracks from "../../api-functions/tracks-api";
import LoadingLazyBackground from "../microComponents/Loading/LoadingLazyBackground";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import TrackCard from "../cards/TrackCard";
import FetchAllRecords from "../../api-functions/records-api";
import {RecordCardWithSongsWithImage} from "../cards/RecordCard";

const AllTracks = () => {
    const tracks = FetchAllTracks();
    return tracks.length ?
        (<div className="row">
            {tracks.map((track) =>
                <TrackCard id={track.id} key={track.id} recordId={track.recordId} linked/>
            )}
        </div>)
        :
        (<LoadingLazyBackground />)
};

const AllTracksListByRecord = () => {

    const records = FetchAllRecords();

    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <RecordCardWithSongsWithImage id={record.id} key={record.id} name={record.name} artistId={record.artistId}/>
            )}
        </div>)
        :
        (<LoadingStandard spinning={true} />)
};

export default AllTracks;
export {AllTracksListByRecord};
