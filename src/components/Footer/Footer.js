import React from 'react';
import FooterNavigation from "../Navigation/FooterNavigation";

const Footer = () => {

    return (
    <footer className="container-fluid fixed-bottom">
        <div className="row h-100">
            <div className="col-12">

                <FooterNavigation/>
            </div>
        </div>
    </footer>
)};

export default Footer;
