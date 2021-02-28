import React from "react";
import {LoadingStandard} from "../MicroComponents/MicroComponents";
import {FetchAllArtistsWithRecords} from "../../api-functions/artists-api";
import RecordsByArtistListGrouped from "./RecordsByArtistListGrouped";

const AllRecordsByArtistList = () => {

    const artistsWithRecords = FetchAllArtistsWithRecords();

    return artistsWithRecords.length ?
        (<>
            {artistsWithRecords.map((artist) =>
                <RecordsByArtistListGrouped id={artist.id} key={artist.id}/>
            )}
        </>)
        :
        (<LoadingStandard spinning={true} />)
};

export default AllRecordsByArtistList;
