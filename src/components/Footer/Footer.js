import React, {useContext} from 'react';
import FooterNavigation from "../Navigation/FooterNavigation";
import {NavigationContext} from "../NavigationStore/NavigationStore";
import CopyrightInformation from "../microComponents/CopyrightInformation";

const Footer = () => {
    const hideNavs = useContext(NavigationContext)[0];
    const showHallerDenNavs = useContext(NavigationContext)[2];
    return hideNavs ?
        showHallerDenNavs ?
            (
                <footer className="article w-100 bg-light border-top pt-3 text-center">
                    <div className="container py-4">
                        <div className="row">
                            <div className="col-12">
                                <p>Håller den?</p>
                            </div>
                        </div>
                    </div>
                </footer>
            )
            :
            (<footer className="article w-100 bg-light border-top pt-3 text-center">
                <div className="container py-4">
                    <div className="row">
                        <div className="col-12">
                            <CopyrightInformation/>
                        </div>
                    </div>
                </div>
            </footer>)
        :
        (
            <footer className="container-fluid fixed-bottom">
                <div className="row h-100">
                    <div className="col-12 p-0">
                        <FooterNavigation/>
                    </div>
                </div>
            </footer>
        )
};

export default Footer;
