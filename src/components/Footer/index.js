import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as ROUTES from '../../constants/routes';
import {Link} from "react-router-dom";

const Footer = () => (
    <footer className="container-fluid standard-container">
        <div className="row h-100">
            <div className="col-12 small d-flex align-items-center justify-content-center">
                <span><FontAwesomeIcon icon={['far', 'copyright']} /> 2020  <Link to={ROUTES.SIGN_UP}>Joakim Johnsson</Link></span>
            </div>
        </div>
    </footer>
);

export default Footer;