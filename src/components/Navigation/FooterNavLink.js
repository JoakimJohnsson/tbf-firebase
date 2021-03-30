import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

/**
 * A link paired with a fontawesome icon. Used in footer navigation. Displayed here within a Navbar.
 */

const FooterNavLink = ({link, text, icon}) => (
    <NavLink exact activeClassName="active" className="nav-link" to={link}><FontAwesomeIcon icon={icon} size="2x" className="d-block"/>
        <span className="mt-1">{text}</span>
    </NavLink>
);

FooterNavLink.defaultProps = {
    link: "#",
    text: "Home",
    icon: "home"
}

FooterNavLink.propTypes = {
    /** A route. */
    link: PropTypes.string,
    /** Text to be displayed with the icon. */
    text: PropTypes.string,
    /** The name of a fontawesome icon to be displayed. */
    icon: PropTypes.string
}

export default FooterNavLink;
