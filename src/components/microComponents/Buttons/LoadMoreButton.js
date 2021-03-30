import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

/**
 * A button used in paginated lists to load more items.
 */

const LoadMoreButton = ({loadMore}) => (
    <div className="w-100 text-center">
        <button className="btn button__load-more m-3" onClick={loadMore}>
            <FontAwesomeIcon icon={"chevron-down"} aria-label="Show more artists"/>
        </button>
    </div>
);

LoadMoreButton.propTypes = {
    /** A function that loads more items in a list. */
    loadMore: PropTypes.func
}

export default LoadMoreButton;
