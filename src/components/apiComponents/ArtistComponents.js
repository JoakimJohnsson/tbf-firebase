import React from "react";
import {FetchArtistFromId} from "../../api-functions/artists-api";
import {Link} from "react-router-dom";
import LazyPlaceholder from "../microComponents/LazyPlaceholder";

const Artist = (props) => {
    const artist = FetchArtistFromId(props.id);

    return artist.name ?
        (<>{artist.name}</>)
        :
        (<><LazyPlaceholder charNumber={5}/> <LazyPlaceholder charNumber={8}/></>)
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
        (<><LazyPlaceholder charNumber={5}/> <LazyPlaceholder charNumber={8}/> : <LazyPlaceholder charNumber={3}/> <LazyPlaceholder charNumber={5}/> <LazyPlaceholder charNumber={3}/></>)
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
        (<><LazyPlaceholder charNumber={5}/> <LazyPlaceholder charNumber={8}/></>)
};

export {ArtistLink, ArtistLinkAndTrackName};
export default Artist;
