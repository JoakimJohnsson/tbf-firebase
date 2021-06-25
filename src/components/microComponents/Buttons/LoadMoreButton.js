import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

/**
 * A button used in paginated lists to load more items.
 */

const LoadMoreButton = ({loadMore}) => (
    <button className="button__load-more-cmp" onClick={loadMore}>
        <FontAwesomeIcon icon={"chevron-down"} aria-label="Show more artists"/>
    </button>
);

LoadMoreButton.propTypes = {
    /** A function that loads more items in a list. */
    loadMore: PropTypes.func
}

export default LoadMoreButton;
