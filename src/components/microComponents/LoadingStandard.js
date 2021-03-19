import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LoadingStandard = ({text, icon, spinning}) => (
    <div className="loading-component">
        <div className="text-center">
            <p className="mb-3">{text || "Loading..."}</p>
            <p><FontAwesomeIcon icon={icon || "spinner"} spin={spinning} size="2x"/></p>
        </div>

    </div>
);

export default LoadingStandard;
