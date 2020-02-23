import React from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import SignOutButton from "../SignOut";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AuthUserContext from "../Session/context";
import * as ROLES from '../../constants/roles';
import TbfLogo from "../Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navigation = () => (
    <header>
        <Navbar className="standard-container navbar-header" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <Link to={ROUTES.START}><TbfLogo/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <NavigationAuth authUser={authUser}/> : <NavigationNonAuth/>}
                </AuthUserContext.Consumer>
            </Navbar.Collapse>
        </Navbar>
    </header>
);
const NavigationFooter = () => (
    <Navbar className="navbar-footer justify-content-center" bg="dark" variant="dark" expand="true">
        <NavLinkComponentFooter link={ROUTES.START} text={"Start"} icon={"home"}/>
        <NavLinkComponentFooter link={ROUTES.ARTISTS} text={"Artists"} icon={"user-astronaut"}/>
        <NavLinkComponentFooter link={ROUTES.RECORDS} text={"Records"} icon={"record-vinyl"}/>
        <NavLinkComponentFooter link={ROUTES.SONGS} text={"Songs"} icon={"music"}/>
        <NavLinkComponentFooter link={ROUTES.SEARCH} text={"Search"} icon={"search"}/>
    </Navbar>
);
const NavigationAuth = ({authUser}) => (
    <Nav className="ml-auto">
        {!!authUser.roles[ROLES.ADMIN] && (
            <>
                <NavLinkComponent link={ROUTES.ACCOUNT} text={"Account"}/>
                <NavLinkComponent link={ROUTES.HOME} text={"Home"}/>
                <NavLinkComponent link={ROUTES.ADMIN} text={"Admin"}/>
            </>
        )}
        <SignOutButton/>
    </Nav>
);
const NavigationNonAuth = () => (
    <Nav className="ml-auto">
        <NavLinkComponent link={ROUTES.START} text={"Start"}/>
        <NavLinkComponent link={ROUTES.ARTISTS} text={"Artists"}/>
        <NavLinkComponent link={ROUTES.RECORDS} text={"Records"}/>
        <NavLinkComponent link={ROUTES.SONGS} text={"Songs"}/>
        <NavLinkComponent link={ROUTES.SEARCH} text={"Search"}/>
    </Nav>
);

const NavLinkComponent = ({link, text}) => (
    <Link className="nav-link" to={link}>{text}</Link>
);
const NavLinkComponentFooter = ({link, text, icon}) => (
    <>
        <Link className="nav-link" to={link}><FontAwesomeIcon icon={icon} size="2x" className="d-block"/>
            <span className="mt-1">{text}</span>
        </Link>
    </>
);
export default Navigation;
export {NavigationFooter};
