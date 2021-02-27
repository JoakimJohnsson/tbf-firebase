import React from "react";
import FetchAllSongs from "../../api-functions/tracks-api";
import {LoadingComponent, LoadingComponentStandard} from "../MicroComponents/MicroComponents";
import TrackCard from "../cards/TrackCard";
import FetchAllRecords from "../../api-functions/records-api";
import {RecordCardWithSongs} from "../cards/RecordCard";

const AllSongsList = () => {
    const songs = FetchAllSongs();
    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <TrackCard id={song.id} key={song.id} recordId={song.recordId} linked/>
            )}
        </div>)
        :
        (<LoadingComponent />)
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
        (<LoadingComponentStandard spinning={true} />)
};

export default AllSongsList;
export {AllSongsListByRecord};
