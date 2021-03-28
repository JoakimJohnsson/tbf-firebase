import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const LoadingStandard = ({text, icon, spinning}) => (
    <div className="loading-component">
        <div className="text-center">
            <p className="mb-3">{text}</p>
            <p><FontAwesomeIcon icon={icon} spin={spinning} size="2x"/></p>
        </div>
    </div>
);

LoadingStandard.defaultProps = {
    text: "Loading...",
    icon: "spinner",
    spinning: false
}

LoadingStandard.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.string,
    spinning: PropTypes.bool
}

export default LoadingStandard;
