import React from "react";
import FetchAllSongs from "../../api-functions/songs-api";
import {LoadingComponent, LoadingComponentStandard} from "../MicroComponents/MicroComponents";
import SongCard from "../cards/SongCard";
import FetchAllRecords from "../../api-functions/records-api";
import {RecordCardWithSongs} from "../cards/RecordCard";

const AllSongsList = () => {
    const songs = FetchAllSongs();
    return songs.length ?
        (<div className="row">
            {songs.map((song) =>
                <SongCard id={song.id} key={song.id} recordId={song.recordId} linked/>
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
