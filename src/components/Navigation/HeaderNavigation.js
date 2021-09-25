import React, {useContext} from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import TbfLogo from "../TbfLogo/TbfLogo";
import {NavigationContext} from "../NavigationStore/NavigationStore";

const HeaderNavigation = () => {
    const hideNavs = useContext(NavigationContext)[0];
    return hideNavs ?
        <header className="border-bottom">
            <Navbar className="navbar-header navbar-header__variant justify-content-between align-items-center" bg="light" variant="light"
                    expand="md" aria-label="Header navigation">
                <div className="container">
                    <h1 className="m-0"><Link to={ROUTES.DEVOPS} title={"To devOps page"} className={"logo-font-family__4 h1"}>DevOps</Link></h1>
                </div>
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
