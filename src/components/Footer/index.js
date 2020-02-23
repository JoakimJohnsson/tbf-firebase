import React from 'react';
import {NavigationFooter} from "../Navigation";

const Footer = () => (
    <footer className="container-fluid fixed-bottom">
        <div className="row h-100">
            <div className="col-12 d-flex align-items-center justify-content-center">
                <NavigationFooter/>
            </div>
        </div>
    </footer>
);

export default Footer;