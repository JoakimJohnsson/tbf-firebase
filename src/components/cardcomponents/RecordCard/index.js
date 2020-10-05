import React from 'react';
import {Link} from "react-router-dom";

const RecordCard = (props) => {


    return (
        <div className={`col-12 col-sm-6 col-xl-3 p-3`} key={props.id}>

            <div className={`record-card`}>


                <img alt={`Cover for ${props.name}`} src={props.coverUrl}/>

                <div className={`record-card__content p-3`}>

                    <Link to={`/${props.route}/${props.id}`}>

                        <p className={`card-title`}>{props.artistId}</p>
                        <p className={`card-sub-title`}>{props.name}</p>

                    </Link>

                </div>

            </div>


        </div>
    )
};

export default RecordCard;