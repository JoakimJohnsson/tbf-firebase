import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const IconLink = ({link, text, icon}) => (
    <Link className="" to={link}><FontAwesomeIcon icon={icon}/><span className="ml-2">{text}</span></Link>
);

export default IconLink;