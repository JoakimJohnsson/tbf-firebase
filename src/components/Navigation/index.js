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
    <header>
        <Navbar className="p-5" bg="dark" variant="dark" expand="lg">
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
    // <Nav className="ml-auto">
    //     <Nav.Link><Link to={ROUTES.START}>Start</Link></Nav.Link>
    //     <Nav.Link><Link to={ROUTES.HOME}>Home</Link></Nav.Link>
    //     <Nav.Link><Link to={ROUTES.ACCOUNT}>Account</Link></Nav.Link>
    //     <Nav.Link><Link to={ROUTES.ADMIN}>Admin</Link></Nav.Link>
    //     <SignOutButton/>
    // </Nav>
    <Nav className="ml-auto">
        <Nav.Link href={ROUTES.START}>Start</Nav.Link>
        <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
        <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
        <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link>
        <SignOutButton/>
    </Nav>
);
const NavigationNonAuth = () => (
    // <Nav className="ml-auto">
    //     <Nav.Link><Link to={ROUTES.SIGN_IN}>Sign in</Link></Nav.Link>
    //     <Nav.Link><Link to={ROUTES.START}>Start</Link></Nav.Link>
    // </Nav>
    <Nav className="ml-auto">
        <Nav.Link href={ROUTES.SIGN_IN}>Sign in</Nav.Link>
        <Nav.Link href={ROUTES.START}>Start</Nav.Link>
    </Nav>
);

export default Navigation;
