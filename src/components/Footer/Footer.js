import React, {useContext} from 'react';
import FooterNavigation from "../Navigation/FooterNavigation";
import {NavigationContext} from "../NavigationStore/NavigationStore";

const Footer = () => {

    const hideNavs = useContext(NavigationContext)[0];

    return hideNavs ?
        <p>annan footer</p>
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
