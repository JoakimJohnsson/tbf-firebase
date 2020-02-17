import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import Navigation from '../Navigation';
import StartPage from '../Start';
import SignUpPage from '../SignUp';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import withAuthentication from "../Session/withAuthentication";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAirbnb, faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleLeft, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer";

library.add(faAirbnb, faGoogle, faFacebookF, faArrowAltCircleLeft, faCopyright, faWrench);

const App = () => (
    <Router>
        <Navigation/>
        <div className="container-fluid standard-container">
            <Route exact path={ROUTES.START} component={StartPage}/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/>
            <Route path={ROUTES.HOME} component={HomePage}/>
            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={ROUTES.ADMIN} component={AdminPage}/>
        </div>
        <Footer/>
    </Router>
);

export default withAuthentication(App);
