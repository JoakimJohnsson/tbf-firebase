import React from 'react';
import * as ROUTES from '../../constants/routes';
import {Link} from 'react-router-dom';
import SignOutButton from "../SignOut";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import AuthUserContext from "../Session/context";
import * as ROLES from '../../constants/roles';
import TbfLogo from "../Logo";

const Navigation = () => (
    <header>
        <Navbar className="standard-container" bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <Link to={ROUTES.START}><TbfLogo/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <AuthUserContext.Consumer>
                    {authUser => authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth/>}
                </AuthUserContext.Consumer>
            </Navbar.Collapse>
        </Navbar>
    </header>
);
const NavigationAuth = ({ authUser }) => (
    <Nav className="ml-auto">
        <Link className="nav-link" to={ROUTES.HOME}>Home</Link>
        <Link className="nav-link" to={ROUTES.ACCOUNT}>Account</Link>
        {!!authUser.roles[ROLES.ADMIN] && (
            <li>
                <Link className="nav-link" to={ROUTES.ADMIN}>Admin</Link>
            </li>
        )}
        <SignOutButton/>
    </Nav>
);
const NavigationNonAuth = () => (
    <Nav className="ml-auto">
        <Link className="nav-link" to={ROUTES.START}>Start</Link>
        <Link className="nav-link" to={ROUTES.ARTISTS}>Artists</Link>
        <Link className="nav-link" to={ROUTES.RECORDS}>Records</Link>
        <Link className="nav-link" to={ROUTES.SONGS}>Songs</Link>
        <Link className="nav-link" to={ROUTES.PLAY}>Play</Link>
        <Link className="nav-link" to={ROUTES.SEARCH}>Search</Link>
    </Nav>
);
// const NavigationFooter = () => (
//     <Nav className="ml-auto">
//         <Link className="nav-link" to={ROUTES.START}>Start</Link>
//         <Link className="nav-link" to={ROUTES.ARTISTS}>Artists</Link>
//         <Link className="nav-link" to={ROUTES.RECORDS}>Records</Link>
//         <Link className="nav-link" to={ROUTES.SONGS}>Songs</Link>
//         <Link className="nav-link" to={ROUTES.PLAY}>Play</Link>
//         <Link className="nav-link" to={ROUTES.SEARCH}>Search</Link>
//     </Nav>
// );

export default Navigation;
