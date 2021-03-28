import React from 'react';
import PropTypes from "prop-types";
import {CHARACTER_PLACEHOLDER} from "../../constants/strings";

/**
 * A placeholder for words. Uses a randomized number to generate dynamic character placeholders.
 */

const LazyTextPlaceholder = ({charCount}) => {
    let rand = Math.floor(Math.random() * charCount) + 3;
    let placeholder = [];
    for (let i = 0; i < rand; i++) {
        placeholder.push(<span className="opacity-1" key={i}>{CHARACTER_PLACEHOLDER}</span>)
    }
    return (
        <>{placeholder}</>
    )
};

LazyTextPlaceholder.defaultProps = {
    charCount: 3
}

LazyTextPlaceholder.propTypes = {
    /** Initial number of characters. This + 3 is used for randomization */
    charCount: PropTypes.number
}

export default LazyTextPlaceholder;
