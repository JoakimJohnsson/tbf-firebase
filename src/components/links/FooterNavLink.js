import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";

const FooterNavLink = ({link, text, icon}) => (
    <NavLink exact activeClassName="active" className="nav-link" to={link}><FontAwesomeIcon icon={icon} size="2x" className="d-block"/>
        <span className="mt-1">{text}</span>
    </NavLink>
);

export default FooterNavLink;