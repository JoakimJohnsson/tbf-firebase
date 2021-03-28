import React from 'react';
import PropTypes from "prop-types";

const LazyPlaceholder = ({charCount}) => {
    let rand = Math.floor(Math.random() * charCount) + 2;
    let placeholder = [];
    for (let i = 0; i < rand; i++) {
        placeholder.push(<span className="opacity-1" key={i}>&#9632;</span>)
    }
    return (
        <>{placeholder}</>
    )
};

LazyPlaceholder.defaultProps = {
    charCount: 5
}

LazyPlaceholder.propTypes = {
    charCount: PropTypes.number
}

export default LazyPlaceholder;
