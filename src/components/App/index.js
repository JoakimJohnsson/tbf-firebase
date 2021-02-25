import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAirbnb, faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleLeft, faCopyright} from '@fortawesome/free-regular-svg-icons';
import {
    faWrench, faDownload, faHome, faArrowAltCircleDown, faArrowDown, faArrowUp, faArrowAltCircleUp, faRecordVinyl, faMusic, faSearch, faUserAstronaut, faPlayCircle, faPlus, faTimes, faPen,
    faMinus, faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faSpinner, faSave, faAngleDoubleDown, faCompactDisc, faUsersSlash, faRobot, faVrCardboard
} from '@fortawesome/free-solid-svg-icons';
import Navigation from '../Navigation/Navigation';
import Footer from "../Footer/footer";
import StartPage from '../../pages/StartPage';
import ArtistsPage from "../../pages/ArtistsPage";
import ArtistPage from "../../pages/ArtistPage";
import RecordsPage from "../../pages/RecordsPage";
import RecordPage from "../../pages/RecordPage";
import TracksPage from "../../pages/TracksPage";
import UploadPage from "../../pages/UploadPage";

library.add(faAirbnb, faDownload, faGoogle, faFacebookF, faArrowAltCircleLeft, faArrowAltCircleDown, faArrowDown, faArrowUp, faArrowAltCircleUp, faCopyright, faWrench, faHome, faRecordVinyl,
    faMusic, faSearch, faUserAstronaut, faPlayCircle, faPlus, faTimes, faPen, faMinus, faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faSpinner, faSave,
    faAngleDoubleDown, faCompactDisc, faUsersSlash, faRobot, faVrCardboard);

const App = () => (
    <Router>
        <Navigation/>
        <div className="container-fluid standard-container">
            <Route exact path={ROUTES.START} component={StartPage}/>
            <Route path={ROUTES.ARTISTS} component={ArtistsPage}/>
            <Route path={ROUTES.ARTIST} component={ArtistPage}/>
            <Route path={ROUTES.RECORDS} component={RecordsPage}/>
            <Route path={ROUTES.RECORD} component={RecordPage}/>
            <Route path={ROUTES.TRACKS} component={TracksPage}/>
            <Route path={ROUTES.UPLOAD} component={UploadPage}/>
        </div>
        <Footer/>
    </Router>
);

export default App;
