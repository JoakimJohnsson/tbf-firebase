import React from "react";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";
import {FetchAllArtistsWithRecords} from "../../api-functions/artists-api";
import RecordsByArtistGrouped from "./RecordsByArtistGrouped";

const AllRecordsByArtist = () => {

    const artistsWithRecords = FetchAllArtistsWithRecords();

    return artistsWithRecords.length ?
        (<>
            {artistsWithRecords.map((artist) =>
                <RecordsByArtistGrouped id={artist.id} key={artist.id}/>
            )}
        </>)
        :
        (<LoadingStandard spinning={true} />)
};

export default AllRecordsByArtist;
