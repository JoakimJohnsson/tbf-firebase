import React from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import TbfLogo from "../TbfLogo/TbfLogo";

const HeaderNavigation = () => (
    <header>
        <Navbar className="standard-container navbar-header justify-content-center" bg="dark" variant="dark"
                expand="lg">
            <Navbar.Brand>
                <Link to={ROUTES.START}><TbfLogo/></Link>
            </Navbar.Brand>
        </Navbar>
    </header>
);

export default HeaderNavigation;
