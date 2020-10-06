import React from "react";
import {Link} from "react-router-dom";
import imgUnavailable from "../../images/image_unavailable.png";
import Artist from "../listcomponents/single/ArtistItem";

const RecordCard = (props) => {
    let rand = Math.floor(Math.random() * 4) + 1;
    return (
        <div className={props.columnClass} key={props.id}>
            <div className={`record-card`}>
                <img alt={`Cover for ${props.name}`} src={props.coverUrl || imgUnavailable}/>
                <div className={`record-card__content p-3`}>
                    <Link to={`/${props.route}/${props.id}`}>
                        <p className={`card-title`}><Artist id={props.artistId}/></p>
                        <p className={`card-sub-title text-color-variant__${rand.toString()}`}>{props.name}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default RecordCard;
