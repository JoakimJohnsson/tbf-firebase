import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => (
    <footer className="container-fluid standard-container">
        <div className="row">
            <div className="col-12 small">
                <p><FontAwesomeIcon icon={['far', 'copyright']} /> 2020 Joakim Johnsson</p>
            </div>
        </div>
    </footer>
);

export default Footer;