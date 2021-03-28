import React from 'react';
import PropTypes from "prop-types";
import {CHARACTER_PLACEHOLDER} from "../../constants/strings";

const LazyTextPlaceholder = ({charCount}) => {
    let rand = Math.floor(Math.random() * charCount) + 2;
    let placeholder = [];
    for (let i = 0; i < rand; i++) {
        placeholder.push(<span className="opacity-1" key={i}>{CHARACTER_PLACEHOLDER}</span>)
    }
    return (
        <>{placeholder}</>
    )
};

LazyTextPlaceholder.defaultProps = {
    charCount: 5
}

LazyTextPlaceholder.propTypes = {
    /** Initial number of characters. This + 2 is used to generate a randomized number of characters used as placeholder for words. */
    charCount: PropTypes.number
}

export default LazyTextPlaceholder;
