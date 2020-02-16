import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => (
    <footer className="container-fluid standard-container">
        <div className="row h-100">
            <div className="col-12 small d-flex align-items-center justify-content-center">
                <span><FontAwesomeIcon icon={['far', 'copyright']} /> 2020 Joakim Johnsson</span>
            </div>
        </div>
    </footer>
);

export default Footer;