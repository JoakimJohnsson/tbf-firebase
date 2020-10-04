import React from 'react';
import {Link} from "react-router-dom";



const DynamicCard = (props) => {

    let rand = Math.floor(Math.random() * 9) + 1;

    return (
        <div className={`col-12 col-sm-6 col-xl-3 artist-card__simple p-3 logo-font-family__${rand.toString()}`} key={props.id}>
            <Link to={`/${props.route}/${props.id}`}>
                {props.name}
            </Link>
        </div>
    )
};

export default DynamicCard;