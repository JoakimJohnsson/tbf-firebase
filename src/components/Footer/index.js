import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = () => (
    <footer className="container-fluid p-3 p-sm-4 p-md-5">

        <div className="row">
            <div className="col-12 small">
                <p><FontAwesomeIcon icon={['far', 'copyright']} /> 2020 Joakim Johnsson</p>
            </div>
        </div>
    </footer>
);

export default Footer;