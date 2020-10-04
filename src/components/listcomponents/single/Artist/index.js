import React from "react";
import {FetchArtistFromId} from "../../../../api-functions/Artists";

const Artist = (props) => {

    const artist = FetchArtistFromId(props.id);

    return <>{artist.name}</>
};

export default Artist;