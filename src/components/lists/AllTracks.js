import React from "react";
import FetchAllTracks from "../../api-functions/tracks-api";
import {LoadingLazyBackground} from "../microComponents/MicroComponents";
import LoadingStandard from "../microComponents/LoadingStandard";
import TrackCard from "../cards/TrackCard";
import FetchAllRecords from "../../api-functions/records-api";
import {RecordCardWithSongsWithImage} from "../cards/RecordCard";

const AllTracks = () => {
    const songs = FetchAllTracks();
    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <TrackCard id={song.id} key={song.id} recordId={song.recordId} linked/>
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
                <RecordCardWithSongsWithImage id={record.id} name={record.name} artistId={record.artistId}/>
            )}
        </div>)
        :
        (<LoadingStandard spinning={true} />)
};

export default AllTracks;
export {AllTracksListByRecord};
