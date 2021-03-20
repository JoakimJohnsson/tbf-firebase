import React from 'react';
import * as ROUTES from '../../constants/routes';
import Navbar from 'react-bootstrap/Navbar';
import FooterNavLink from "./FooterNavLink";

const showUpload = false;

const FooterNavigation = () => (
    <Navbar className="navbar-footer p-0" bg="dark" variant="dark" expand="true">
        <FooterNavLink link={ROUTES.START} text={"Start"} icon={"home"}/>
        <FooterNavLink link={ROUTES.ARTISTS} text={"Artists"} icon={"user-astronaut"}/>
        <FooterNavLink link={ROUTES.RECORDS} text={"Records"} icon={"compact-disc"}/>
        <FooterNavLink link={ROUTES.TRACKS} text={"Tracks"} icon={"music"}/>
        {showUpload ? <FooterNavLink link={ROUTES.UPLOAD} text={"Upload"} icon={"plus"}/> : false}
    </Navbar>
);

export default FooterNavigation;
