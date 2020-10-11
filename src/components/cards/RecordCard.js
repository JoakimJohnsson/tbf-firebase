import React from "react";
import {Link} from "react-router-dom";
import imgUnavailable from "../../images/image_unavailable.png";
import Artist from "../lists/ArtistItem";
import * as COLUMNS from "../../constants/cols"

const RecordCard = ({route, id, name, artistId, coverUrl, fullWidth}) => {
    let rand = Math.floor(Math.random() * 7) + 1;
    return (
        <div className={fullWidth ? COLUMNS.RECORDS_FULLWIDTH : COLUMNS.RECORDS_MAIN} key={id}>
            <div className={`record-card`}>
                <img alt={`Cover for ${name}`} src={coverUrl || imgUnavailable}/>
                <div className={`record-card__content p-3`}>
                    <Link to={`/${route}/${id}`}>
                        <p className={`card-title`}><Artist id={artistId}/></p>
                        <p className={`card-sub-title text-color-variant__${rand.toString()}`}>{name}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default RecordCard;
