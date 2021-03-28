import React from "react";
import {FetchArtistFromId} from "../../api-functions/artists-api";
import {Link} from "react-router-dom";
import LazyTextPlaceholder from "../microComponents/LazyTextPlaceholder";

const Artist = (props) => {
    const artist = FetchArtistFromId(props.id);

    return artist.name ?
        (<>{artist.name}</>)
        :
        (<><LazyTextPlaceholder charCount={5}/> <LazyTextPlaceholder charCount={8}/></>)
};

const ArtistLinkAndTrackName = (props) => {
    const artist = FetchArtistFromId(props.id);
    return artist.name ?
        (<>
            <Link to={`/artist/${props.id}`}>
                <span className="text-uppercase">{artist.name}</span>
            </Link> - {props.trackName}
        </>)
        :
        (<><LazyTextPlaceholder charCount={5}/> <LazyTextPlaceholder charCount={8}/> : <LazyTextPlaceholder charCount={3}/> <LazyTextPlaceholder charCount={5}/> <LazyTextPlaceholder charCount={3}/></>)
};

const ArtistLink = (props) => {
    const artist = FetchArtistFromId(props.id);
    return artist.name ?
        (<>
            <Link to={`/artist/${props.id}`}>
                <span className={props.className}>{artist.name}</span>
            </Link>
        </>)
        :
        (<><LazyTextPlaceholder charCount={5}/> <LazyTextPlaceholder charCount={8}/></>)
};

export {ArtistLink, ArtistLinkAndTrackName};
export default Artist;
