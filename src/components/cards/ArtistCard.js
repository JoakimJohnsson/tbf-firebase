import React from 'react';
import {Link} from "react-router-dom";
import {ARTISTS_FULLWIDTH, ARTISTS_MAIN} from "../../constants/cols";
import {colorRandomizer, fontRandomizer} from "../microComponents/microComponentsHelper";

const ArtistCard = ({id, route, imgUrl, name, fullWidth}) => {

    const CLASSNAMES_COMMON = `artist-card__simple p-3 logo-font-family__${fontRandomizer().toString()}`
    const CLASSNAMES_FULLWIDTH = ARTISTS_FULLWIDTH + CLASSNAMES_COMMON;
    const CLASSNAMES_MAIN = ARTISTS_MAIN + CLASSNAMES_COMMON;
    const alt = 'Hero image of ' + name;

    return (
        <div className={fullWidth ? CLASSNAMES_FULLWIDTH : CLASSNAMES_MAIN} key={id}>
            <Link className={`text-color-variant__${colorRandomizer().toString()}`} to={`/${route}/${id}`}>
                {imgUrl ? <img alt={alt} src={imgUrl}/> : false}
                <span>{name}</span>
            </Link>
        </div>
    )
};

export default ArtistCard;