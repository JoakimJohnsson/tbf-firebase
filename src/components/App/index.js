import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import Navigation from '../Navigation';
import StartPage from '../../pages/unauthorized/Start';
import SignUpPage from '../SignUp';
import HomePage from '../../pages/authorized/AdminHome';
import AccountPage from '../../pages/authorized/Account';
import AdminPage from '../../pages/authorized/Admin';
import withAuthentication from "../Session/withAuthentication";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAirbnb, faGoogle, faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faArrowAltCircleLeft, faCopyright } from '@fortawesome/free-regular-svg-icons'
import { faWrench, faHome, faRecordVinyl, faMusic, faSearch, faUserAstronaut, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import Footer from "../Footer";
import ArtistPage from "../../pages/unauthorized/Artists";
import RecordsPage from "../../pages/unauthorized/Records";
import SongsPage from "../../pages/unauthorized/Songs";
import PlayPage from "../../pages/unauthorized/Play";
import SearchPage from "../../pages/unauthorized/Search";

library.add(faAirbnb, faGoogle, faFacebookF, faArrowAltCircleLeft, faCopyright, faWrench, faHome, faRecordVinyl, faMusic, faSearch, faUserAstronaut, faPlayCircle);

const App = () => (
    <Router>
        <Navigation/>
        <div className="container-fluid standard-container">
            <Route exact path={ROUTES.START} component={StartPage}/>
            <Route path={ROUTES.SIGN_UP} component={SignUpPage}/>
            <Route path={ROUTES.ARTISTS} component={ArtistPage}/>
            <Route path={ROUTES.RECORDS} component={RecordsPage}/>
            <Route path={ROUTES.SONGS} component={SongsPage}/>
            <Route path={ROUTES.PLAY} component={PlayPage}/>
            <Route path={ROUTES.SEARCH} component={SearchPage}/>
            <Route path={ROUTES.HOME} component={HomePage}/>
            <Route path={ROUTES.ACCOUNT} component={AccountPage}/>
            <Route path={ROUTES.ADMIN} component={AdminPage}/>
        </div>
        <Footer/>
    </Router>
);

export default withAuthentication(App);
