import React from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import SignOutButton from "../SignOut";
import '../../css/components/_navigation.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AuthUserContext from "../Session/context";
import TbfLogo from "../Logo";

const Navigation = () => (

    <Navbar className="p-4" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>
            <Link to={ROUTES.LANDING}><TbfLogo/></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <AuthUserContext.Consumer>
                {authUser => authUser ? <NavigationAuth/> : <NavigationNonAuth/>}
            </AuthUserContext.Consumer>
        </Navbar.Collapse>
    </Navbar>
);
const NavigationAuth = () => (
    <Nav className="ml-auto" as="ul">
        <Nav.Link as="li"><Link to={ROUTES.LANDING}>Landing</Link></Nav.Link>
        <Nav.Link as="li"><Link to={ROUTES.HOME}>Home</Link></Nav.Link>
        <Nav.Link as="li"><Link to={ROUTES.ACCOUNT}>Account</Link></Nav.Link>
        <Nav.Link as="li"><Link to={ROUTES.ADMIN}>Admin</Link></Nav.Link>
        <SignOutButton/>
    </Nav>
);
const NavigationNonAuth = () => (
    <Nav className="ml-auto" as="ul">
        <Nav.Link as="li"><Link to={ROUTES.SIGN_IN}>Sign in</Link></Nav.Link>
        <Nav.Link as="li"><Link to={ROUTES.LANDING}>Landing</Link></Nav.Link>
    </Nav>
);

export default Navigation;
