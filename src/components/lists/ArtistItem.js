import React from "react";
import {FetchArtistFromId} from "../../api-functions/artists-api";
import {Link} from "react-router-dom";

const Artist = (props) => {
    const artist = FetchArtistFromId(props.id);
    return <>{artist.name}</>
};

const ArtistLink = (props) => {
    const artist = FetchArtistFromId(props.id);
    return <>
        <Link to={`/artist/${props.id}`}>
            <span>{artist.name}</span>
        </Link>
        </>
};

export {ArtistLink};
export default Artist;
