import React from "react";
import {FetchArtistFromId} from "../../api-functions/artists-api";
import {Link} from "react-router-dom";
import LazyPlaceholder from "../microComponents/LazyPlaceholder";

const Artist = (props) => {
    const artist = FetchArtistFromId(props.id);

    return artist.name ?
        (<>{artist.name}</>)
        :
        (<><LazyPlaceholder charCount={5}/> <LazyPlaceholder charCount={8}/></>)
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
        (<><LazyPlaceholder charCount={5}/> <LazyPlaceholder charCount={8}/> : <LazyPlaceholder charCount={3}/> <LazyPlaceholder charCount={5}/> <LazyPlaceholder charCount={3}/></>)
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
        (<><LazyPlaceholder charCount={5}/> <LazyPlaceholder charCount={8}/></>)
};

export {ArtistLink, ArtistLinkAndTrackName};
export default Artist;
