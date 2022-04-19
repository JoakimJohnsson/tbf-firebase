import React, {useContext} from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import TbfLogo from "../TbfLogo/TbfLogo";
import {NavigationContext} from "../NavigationStore/NavigationStore";
import IconLink from "../microComponents/Links/IconLink";

const HeaderNavigation = () => {
    const hideNavs = useContext(NavigationContext)[0];
    const showHallerDenNavs = useContext(NavigationContext)[2];
    return hideNavs ?
        showHallerDenNavs ?
            (
                <header className="border-bottom">
                    <Navbar className="navbar-header navbar-header__variant justify-content-between align-items-center py-3 py-sm-4" bg="light"
                            variant="light"
                            expand="md" aria-label="Header navigation">
                        <div className="container-fluid">
                            <h1 className="m-0 logo-font-family__17"><IconLink link={ROUTES.HOLL_DEN} text={"Höll den?"} icon={"ticket-alt"}/>
                            </h1>
                            <IconLink link={ROUTES.HOLL_DEN} text={"Startsida"} icon={"home"}/>
                        </div>
                    </Navbar>
                </header>
            )
            :
            (
                <header className="border-bottom">
                    <Navbar className="navbar-header navbar-header__variant justify-content-between align-items-center py-3 py-sm-4" bg="light"
                            variant="light"
                            expand="md" aria-label="Header navigation">
                        <div className="container">
                            <h1 className="m-0 logo-font-family__4"><IconLink link={ROUTES.DEVOPS} text={"DevOps"} icon={"journal-whills"}/></h1>
                            <IconLink link={ROUTES.START} text={"Back to friends"} icon={"home"}/>
                        </div>
                    </Navbar>
                </header>
            )
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
