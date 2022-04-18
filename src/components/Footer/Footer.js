import React, {useContext} from 'react';
import {NavigationContext} from "../NavigationStore/NavigationStore";
import FooterHallerDen from "./FooterHallerDen";
import FooterDevOps from "./FooterDevOps";
import FooterTBF from "./FooterTBF";

const Footer = () => {
    const hideNavs = useContext(NavigationContext)[0];
    const showHallerDenNavs = useContext(NavigationContext)[2];
    return hideNavs ?
        showHallerDenNavs ?
            <FooterHallerDen/>
            :
            <FooterDevOps/>
        :
        <FooterTBF/>
};

export default Footer;
