import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {Context} from "../MusicStore/MusicStore";
import {GlobalTrackContext} from "../MusicStore/GlobalTrackStore";
import {randomizer} from "../microComponents/microComponentsHelper";

/**
 * A link paired with a fontawesome icon. Used in footer navigation.
 */

const FooterNavLink = ({link, text, icon}) => (
    <NavLink exact activeClassName="active" className="footer__nav-link-cmp nav-link" to={link}>
        <FontAwesomeIcon icon={icon} size="2x" className="d-block"/>
        <span className="mt-1 text-center">{text}</span>
    </NavLink>
);

const FooterNavLinkButton = ({text, icon}) => {
    const setTrackState = useContext(Context)[1];
    const globalTrackList = useContext(GlobalTrackContext)[0];
    let listLength = globalTrackList.length;
    let randTrack = randomizer(listLength, 0);
    const updateState = () => {
        setTrackState({
            currentTrack: globalTrackList[randTrack].id
        })
    }
    return (
        <button onClick={updateState} className="btn btn-fa__primary footer__nav-link-cmp nav-link">
            <FontAwesomeIcon icon={icon} size="2x" className="d-block"/>
            <span className="mt-1 text-center">{text}</span>
        </button>
    )
};

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
export {FooterNavLinkButton}
