import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const CopyrightInformation = (props) => (
    <div className={props.className}>
        <p className="small">Site content <FontAwesomeIcon icon={['far', 'copyright']}/> 2020 Joakim Johnsson</p>
        <p className="small">Except where otherwise noted, creative content on this site is licensed under
            a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons
                Attribution 3.0 Unported License</a>.
        </p>
    </div>
);

export default CopyrightInformation;
