import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

// fontawesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {faAirbnb, faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons'
import {faArrowAltCircleLeft, faCopyright} from '@fortawesome/free-regular-svg-icons'
import {
    faWrench, faHome, faRecordVinyl, faMusic, faSearch, faUserAstronaut, faPlayCircle, faPlus, faTimes, faPen,
    faMinus, faChevronLeft, faChevronRight, faSpinner, faSave, faAngleDoubleDown
} from '@fortawesome/free-solid-svg-icons';
// components
import Navigation from '../Navigation';
import Footer from "../Footer";

// pages
import StartPage from '../../pages/Start';
import ArtistPage from "../../pages/Artists";
import RecordsPage from "../../pages/Records";
import SongsPage from "../../pages/Songs";

library.add(faAirbnb, faGoogle, faFacebookF, faArrowAltCircleLeft, faCopyright, faWrench, faHome, faRecordVinyl,
    faMusic, faSearch, faUserAstronaut, faPlayCircle, faPlus, faTimes, faPen, faMinus, faChevronLeft, faChevronRight, faSpinner, faSave,
    faAngleDoubleDown);

const App = () => (
    <Router>
        <Navigation/>
        <div className="container-fluid standard-container">
            <Route exact path={ROUTES.START} component={StartPage}/>
            <Route path={ROUTES.ARTISTS} component={ArtistPage}/>
            <Route path={ROUTES.RECORDS} component={RecordsPage}/>
            <Route path={ROUTES.SONGS} component={SongsPage}/>
        </div>
        <Footer/>
    </Router>
);

export default App;
