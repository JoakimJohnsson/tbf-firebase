import React from "react";
import {CopyrightInformation} from "../../MicroComponents/MicroComponents";
import imgUnavailable from "../../../images/image_unavailable.png";
import * as STRINGS from "../../../constants/strings";
import MembersByArtist from "../../lists/MembersByArtist";

const ArtistPageSecondaryColumn = ({id, artist, rand, rand2}) => {
    return (
        <div className="standard-secondary-column">
            <div className="standard-box-wrapper__near-dark">
                <h1 className={`logo-font-family__${rand.toString()} text-uppercase text-color-variant__${rand2.toString()}`}>{artist.name}</h1>
                <img className="w-100 mb-3 opacity-4" alt={`${artist.name}`} src={artist.imgUrl || imgUnavailable}/>
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
                <h2>Members</h2>
                <MembersByArtist artistId={id}/>
                <CopyrightInformation className={"d-none d-lg-block"}/>
            </div>
        </div>
    )
}

export default ArtistPageSecondaryColumn;
