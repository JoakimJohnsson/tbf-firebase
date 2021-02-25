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
            <ArtistPlaceHolder/>
        )
};

const ArtistPlaceHolder = () => {
    let rand = Math.floor(Math.random() * 4) + 2;
    let rand2 = Math.floor(Math.random() * 6) + 2;
    let firstName = [];
    for (let i = 0; i < rand; i++) {
        firstName.push(<span className="opacity-1" key={i}>&#9632;</span>)
    }
    let lastName = [];
    for (let i = 0; i < rand2; i++) {
        lastName.push(<span className="opacity-1" key={i}>&#9632;</span>)
    }
    return (
        <>
            <>{firstName}</> <>{lastName}</>
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
            <ArtistPlaceHolder/>
        )
};

export {ArtistLink};
export default Artist;
