import React from 'react';
import {Link} from "react-router-dom";

const DynamicCard = ({id, route, imgUrl, name}) => {
    let rand = Math.floor(Math.random() * 11) + 1;
    let rand2 = Math.floor(Math.random() * 4) + 1;

    return (
        <div className={`col-6 col-sm-3 artist-card__simple p-3 logo-font-family__${rand.toString()}`} key={id}>
            <Link className={`text-color-variant__${rand2.toString()}`} to={`/${route}/${id}`}>
                {imgUrl ? <img alt={`${name}`} src={imgUrl}/> : false}
                <span>{name}</span>
            </Link>
        </div>
    )
};

export default DynamicCard;