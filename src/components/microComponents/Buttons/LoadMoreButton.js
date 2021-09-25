import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

/**
 * A button used in paginated lists to load more items.
 */

const LoadMoreButton = ({loadMore, ariaLabel}) => (
    <button className="button__load-more-cmp" onClick={loadMore} aria-label={ariaLabel}>
        <FontAwesomeIcon icon={"chevron-down"}/>
    </button>
);

LoadMoreButton.propTypes = {
    /** A function that loads more items in a list. */
    loadMore: PropTypes.func
}

export default LoadMoreButton;
