import React from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import TbfLogo from "../Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navigation = () => (
    <header>
        <Navbar className="standard-container navbar-header justify-content-center" bg="dark" variant="dark"
                expand="lg">
            <Navbar.Brand>
                <h1 className="m-0"><Link to={ROUTES.START}><TbfLogo/></Link></h1>
            </Navbar.Brand>
        </Navbar>
    </header>
);
const NavigationFooter = () => (
    <Navbar className="navbar-footer px-2 px-sm-5" bg="dark" variant="dark" expand="true">
        <NavLinkComponentFooter link={ROUTES.START} text={"Start"} icon={"home"}/>
        <NavLinkComponentFooter link={ROUTES.ARTISTS} text={"Artists"} icon={"user-astronaut"}/>
        <NavLinkComponentFooter link={ROUTES.RECORDS} text={"Records"} icon={"record-vinyl"}/>
        <NavLinkComponentFooter link={ROUTES.SONGS} text={"Songs"} icon={"music"}/>
    </Navbar>
);

const NavLinkComponentFooter = ({link, text, icon}) => (
    <>
        <Link className="nav-link" to={link}><FontAwesomeIcon icon={icon} size="2x" className="d-block"/>
            <span className="mt-1 d-none d-sm-inline-block">{text}</span>
        </Link>
    </>
);
export default Navigation;
export {NavigationFooter};
