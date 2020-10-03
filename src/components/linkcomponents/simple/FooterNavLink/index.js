import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FooterNavLink = ({link, text, icon}) => (
    <Link className="nav-link" to={link}><FontAwesomeIcon icon={icon} size="2x" className="d-block"/>
        <span className="mt-1 d-none d-sm-inline-block">{text}</span>
    </Link>
);

export default FooterNavLink;
