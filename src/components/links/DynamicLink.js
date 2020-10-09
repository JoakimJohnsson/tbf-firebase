import React from 'react';
import {Link} from "react-router-dom";

const DynamicLink = (props) => {
    return (
        <Link className="d-block" to={`/${props.route}/${props.id}`}>
            {props.name}
        </Link>
    )
};

export default DynamicLink;