import React from 'react';
import {Link} from "react-router-dom";

const ArtistCard = ({id, route, imgUrl, name, fullWidth}) => {
    let rand = Math.floor(Math.random() * 16) + 1;
    let rand2 = Math.floor(Math.random() * 8) + 1;

    const ARTISTS_FULLWIDTH = `col-6 col-sm-4 col-xl-2 artist-card__simple p-3 logo-font-family__${rand.toString()}`;
    const ARTISTS_MAIN = `col-6 col-sm-4 artist-card__simple p-3 logo-font-family__${rand.toString()}`;

    return (
        <div className={fullWidth ? ARTISTS_FULLWIDTH : ARTISTS_MAIN} key={id}>
            <Link className={`text-color-variant__${rand2.toString()}`} to={`/${route}/${id}`}>
                {imgUrl ? <img alt={`${name}`} src={imgUrl}/> : false}
                <span>{name}</span>
            </Link>
        </div>
    )
};

export default ArtistCard;