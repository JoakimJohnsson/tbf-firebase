import React from 'react';
import * as ROUTES from '../../constants/routes';
import SignOutButton from "../SignOut";
import '../../css/components/_navigation.scss';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import AuthUserContext from "../Session/context";
import TbfLogo from "../Logo";
import {TbfLogoText} from "../Logo";

const Navigation = () => (

    <Navbar className="tbf-main-nav" expand="lg">
        <Navbar.Brand href="#home">
            <TbfLogo/>
            <TbfLogoText/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
            <AuthUserContext.Consumer>
                {authUser => authUser ? <NavigationAuth/> : <NavigationNonAuth/>}
            </AuthUserContext.Consumer>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
);
const NavigationAuth = () => (
    <Nav className="mr-auto">
        <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
        <Nav.Link href={ROUTES.HOME}>Home</Nav.Link>
        <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
        <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link>
        <SignOutButton/>
    </Nav>
);
const NavigationNonAuth = () => (
    <Nav className="mr-auto">
        <Nav.Link href={ROUTES.SIGN_IN}>Sign in</Nav.Link>
        <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
    </Nav>
);

export default Navigation;
