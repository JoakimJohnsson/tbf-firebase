import React from "react";
import {FetchArtistFromId} from "../../api-functions/artists-api";
import {Link} from "react-router-dom";

const Artist = (props) => {
    const artist = FetchArtistFromId(props.id);

    return artist.name ? (
        <>
            {artist.name}
        </>
    ) :
        (
            <>
                Artist
            </>

        )
};

const ArtistLink = (props) => {
    const artist = FetchArtistFromId(props.id);
    return artist.name ? (
        <>
            <Link to={`/artist/${props.id}`}>
                <span className="text-uppercase">{artist.name}</span>
            </Link>
        </>
    ) :
        (
            <>
                Artist
            </>

        )
};

export {ArtistLink};
export default Artist;
