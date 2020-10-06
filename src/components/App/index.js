import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAirbnb, faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleLeft, faCopyright} from '@fortawesome/free-regular-svg-icons';
import {
    faWrench, faHome, faRecordVinyl, faMusic, faSearch, faUserAstronaut, faPlayCircle, faPlus, faTimes, faPen,
    faMinus, faChevronLeft, faChevronRight, faSpinner, faSave, faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation';
import Footer from "../Footer";
import StartPage from '../../pages/Start';
import ArtistsPage from "../../pages/Artists";
import ArtistPage from "../../pages/Artist";
import RecordsPage from "../../pages/Records";
import RecordPage from "../../pages/Record";
import SongsPage from "../../pages/Songs";

library.add(faAirbnb, faGoogle, faFacebookF, faArrowAltCircleLeft, faCopyright, faWrench, faHome, faRecordVinyl,
    faMusic, faSearch, faUserAstronaut, faPlayCircle, faPlus, faTimes, faPen, faMinus, faChevronLeft, faChevronRight, faSpinner, faSave,
    faAngleDoubleDown);

const App = () => (
    <Router>
        <Navigation/>
        <div className="container-fluid standard-container">
            <Route exact path={ROUTES.START} component={StartPage}/>
            <Route exact path={ROUTES.ARTISTS} component={ArtistsPage}/>
            <Route path={ROUTES.ARTIST} component={ArtistPage}/>
            <Route exact path={ROUTES.RECORDS} component={RecordsPage}/>
            <Route path={ROUTES.RECORD} component={RecordPage}/>
            <Route exact path={ROUTES.SONGS} component={SongsPage}/>
        </div>
        <Footer/>
    </Router>
);

export default App;
