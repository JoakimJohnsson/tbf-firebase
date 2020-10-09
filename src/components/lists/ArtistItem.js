import React from "react";
import {FetchArtistFromId} from "../../api-functions/artists-api";

const Artist = (props) => {
    const artist = FetchArtistFromId(props.id);
    return <>{artist.name}</>
};

export default Artist;
