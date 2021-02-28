import React from "react";
import FetchAllTracks from "../../api-functions/tracks-api";
import {LoadingLazyBackground, LoadingStandard} from "../MicroComponents/MicroComponents";
import TrackCard from "../cards/TrackCard";
import FetchAllRecords from "../../api-functions/records-api";
import {RecordCardWithSongs} from "../cards/RecordCard";

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

const AllSongsListByRecord = () => {

    const records = FetchAllRecords();

    return records.length ?
        (<div className="row">
            {records.map((record) =>
                <RecordCardWithSongs id={record.id} name={record.name} artistId={record.artistId}/>
            )}
        </div>)
        :
        (<LoadingStandard spinning={true} />)
};

export default AllTracks;
export {AllSongsListByRecord};