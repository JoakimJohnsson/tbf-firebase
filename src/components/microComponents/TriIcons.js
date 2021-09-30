import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {colorRandomizer} from "./microComponentsHelper";

const TriIcons = ({icons}) => {
    return (
        <div className={`tri-icons__wrapper tri-icon-color-variant__${colorRandomizer().toString()}`}>
            <div className="tri-icons__content">
                {icons.map(item =>
                    <div aria-hidden="true" className="tri-icons__icon">
                    <FontAwesomeIcon icon={item}/>
                    </div>
                )}
            </div>
        </div>
    )
};

export default TriIcons;
