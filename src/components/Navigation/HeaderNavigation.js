import React, {useContext} from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import TbfLogo from "../TbfLogo/TbfLogo";
import {NavigationContext} from "../NavigationStore/NavigationStore";
import {Nav} from "react-bootstrap";

const HeaderNavigation = () => {
    const hideNavs = useContext(NavigationContext)[0];
    return hideNavs ?
        <header className="border-bottom">
            <Navbar className="navbar-header navbar-header__variant justify-content-between align-items-center" bg="light" variant="light"
                    expand="md" aria-label="Header navigation">
                <Navbar.Brand>
                    <Link to={ROUTES.DEVOPS} title={"To devOps page"} className={"logo-font-family__4 h1"}>DevOps</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <Link to={ROUTES.VALIDATION} className={"nav-link py-2 py-md-0"}>Code validation</Link>
                        <Link to={ROUTES.CHEAT_SHEETS} className={"nav-link py-2 py-md-0"}>Cheat sheets</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
        :
        (
            <header>
                <Navbar className="standard-container navbar-header justify-content-center" bg="dark" variant="dark"
                        expand="lg" aria-label="Header navigation">
                    <Navbar.Brand>
                        <Link to={ROUTES.START} title={"To start page"}><TbfLogo/></Link>
                    </Navbar.Brand>
                </Navbar>
            </header>
        )
};

export default HeaderNavigation;
