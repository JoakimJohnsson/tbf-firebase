import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAirbnb, faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleLeft, faCopyright} from '@fortawesome/free-regular-svg-icons';
import {
    faWrench, faHome, faArrowAltCircleDown, faRecordVinyl, faMusic, faSearch, faUserAstronaut, faPlayCircle, faPlus, faTimes, faPen,
    faMinus, faChevronLeft, faChevronRight, faChevronDown, faSpinner, faSave, faAngleDoubleDown, faCompactDisc, faUsersSlash
} from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import Footer from "../Footer/footer";
import StartPage from '../../pages/StartPage';
import ArtistsPage from "../../pages/ArtistsPage";
import ArtistPage from "../../pages/ArtistPage";
import RecordsPage from "../../pages/RecordsPage";
import RecordPage from "../../pages/RecordPage";
import SongsPage from "../../pages/SongsPage";

library.add(faAirbnb, faGoogle, faFacebookF, faArrowAltCircleLeft, faArrowAltCircleDown , faCopyright, faWrench, faHome, faRecordVinyl,
    faMusic, faSearch, faUserAstronaut, faPlayCircle, faPlus, faTimes, faPen, faMinus, faChevronLeft, faChevronRight,faChevronDown, faSpinner, faSave,
    faAngleDoubleDown, faCompactDisc, faUsersSlash);

const App = () => (
    <Router>
        <Navigation/>
        <div className="container-fluid standard-container">
            <Route exact path={ROUTES.START} component={StartPage}/>
            <Route path={ROUTES.ARTISTS} component={ArtistsPage}/>
            <Route path={ROUTES.ARTIST} component={ArtistPage}/>
            <Route path={ROUTES.RECORDS} component={RecordsPage}/>
            <Route path={ROUTES.RECORD} component={RecordPage}/>
            <Route path={ROUTES.SONGS} component={SongsPage}/>
        </div>
        <Footer/>
    </Router>
);

export default App;
