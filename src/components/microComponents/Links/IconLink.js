import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

/**
 * A link paired with a fontawesome icon. Used as navigation link on page.
 */

const IconLink = ({className, link, text, icon, external}) => (
    external ?
        <a className={className} href={link} target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={icon}/><span className="ml-2">{text}</span></a>
        :
        <Link className={className} to={link}><FontAwesomeIcon icon={icon}/><span className="ml-2">{text}</span></Link>
);

IconLink.defaultProps = {
    className: "",
    link: "#",
    text: "I am an astronaut!",
    icon: "user-astronaut"
}

IconLink.propTypes = {
    /** Css classes. Mainly for margin and padding. Uses normal link and text styles. */
    className: PropTypes.string,
    /** A route. */
    link: PropTypes.string,
    /** Text to be displayed with the icon. */
    text: PropTypes.string,
    /** The name of a fontawesome icon to be displayed. */
    icon: PropTypes.string
}

export default IconLink;
