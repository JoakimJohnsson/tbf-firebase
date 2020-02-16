import React from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import SignOutButton from "../SignOut";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AuthUserContext from "../Session/context";
import TbfLogo from "../Logo";
import {SignInFormInMenu} from "../SignIn";

const Navigation = () => (
    <header>
        <Navbar className="standard-container" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <Link to={ROUTES.START}><TbfLogo/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <NavigationAuth/> : <NavigationNonAuth/>}
                </AuthUserContext.Consumer>
            </Navbar.Collapse>
        </Navbar>
    </header>
);
const NavigationAuth = () => (
    <Nav className="ml-auto">
        <Link className="nav-link pt-4 pt-md-5" to={ROUTES.HOME}>Home</Link>
        <Link className="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
        <Link className="nav-link" to={ROUTES.ADMIN}>Admin</Link>
        <SignOutButton/>
    </Nav>
);
const NavigationNonAuth = () => (
    <Nav className="ml-auto">
        <Link className="nav-link pt-4 pt-md-5" to={ROUTES.START}>Start</Link>
        <Link className="nav-link" to={ROUTES.SIGN_UP}>Sign up</Link>
        <SignInFormInMenu/>
    </Nav>
);

export default Navigation;
