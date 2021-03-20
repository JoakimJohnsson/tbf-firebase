import React from 'react';
import * as STRINGS from "../../constants/strings";

const ArtistDescription = ({artist}) => (
    <>
        <h2>Description</h2>
        <p>
            <span className="text-capitalize">{artist.name} </span>
            {artist.description !== "" ?
                artist.description
                :
                artist.imgUrl === "" ?
                    STRINGS.DEFAULT_ARTIST_DESCRIPTION_MISSING_IMAGE
                    :
                    STRINGS.DEFAULT_ARTIST_DESCRIPTION}
        </p>
    </>
);

export default ArtistDescription;
