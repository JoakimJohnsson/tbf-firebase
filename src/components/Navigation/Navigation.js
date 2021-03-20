import React from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import TbfLogo from "../Logo/Logo";
import FooterNavLink from "../microComponents/FooterNavLink";

const showUpload = false;

const Navigation = () => (
    <header>
        <Navbar className="standard-container navbar-header justify-content-center" bg="dark" variant="dark"
                expand="lg">
            <Navbar.Brand>
                <Link to={ROUTES.START}><TbfLogo/></Link>
            </Navbar.Brand>
        </Navbar>
    </header>
);
const NavigationFooter = () => (
    <Navbar className="navbar-footer p-0" bg="dark" variant="dark" expand="true">
        <FooterNavLink link={ROUTES.START} text={"Start"} icon={"home"}/>
        <FooterNavLink link={ROUTES.ARTISTS} text={"Artists"} icon={"user-astronaut"}/>
        <FooterNavLink link={ROUTES.RECORDS} text={"Records"} icon={"compact-disc"}/>
        <FooterNavLink link={ROUTES.TRACKS} text={"Tracks"} icon={"music"}/>
        {showUpload ? <FooterNavLink link={ROUTES.UPLOAD} text={"Upload"} icon={"plus"}/> : false}
    </Navbar>
);

export default Navigation;
export {NavigationFooter};
