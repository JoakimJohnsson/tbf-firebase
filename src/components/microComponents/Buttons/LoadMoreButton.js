import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LoadMoreButton = ({loadMore}) => (
    <div className="w-100 text-center">
        <button className="btn button__load-more m-3" onClick={loadMore}>
            <FontAwesomeIcon icon={"chevron-down"} aria-label="Show more artists"/>
        </button>
    </div>
);

export default LoadMoreButton;
