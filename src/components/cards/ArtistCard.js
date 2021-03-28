import React from 'react';
import {Link} from "react-router-dom";
import {ARTISTS_FULLWIDTH, ARTISTS_MAIN} from "../../constants/cols";

const ArtistCard = ({id, route, imgUrl, name, fullWidth}) => {
    let rand = Math.floor(Math.random() * 16) + 1;
    let rand2 = Math.floor(Math.random() * 8) + 1;

    const CLASSNAMES_COMMON = `artist-card__simple p-3 logo-font-family__${rand.toString()}`
    const CLASSNAMES_FULLWIDTH = ARTISTS_FULLWIDTH + CLASSNAMES_COMMON;
    const CLASSNAMES_MAIN = ARTISTS_MAIN + CLASSNAMES_COMMON;

    return (
        <div className={fullWidth ? CLASSNAMES_FULLWIDTH : CLASSNAMES_MAIN} key={id}>
            <Link className={`text-color-variant__${rand2.toString()}`} to={`/${route}/${id}`}>
                {imgUrl ? <img alt={`${name}`} src={imgUrl}/> : false}
                <span>{name}</span>
            </Link>
        </div>
    )
};

export default ArtistCard;