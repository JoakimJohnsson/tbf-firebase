import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAirbnb, faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleLeft, faCopyright} from '@fortawesome/free-regular-svg-icons';
import {
    faWrench,
    faFilter,
    faDownload,
    faHome,
    faArrowAltCircleDown,
    faArrowDown,
    faArrowUp,
    faArrowAltCircleUp,
    faRecordVinyl,
    faMusic,
    faSearch,
    faTape,
    faUserAstronaut,
    faPlayCircle,
    faPlus,
    faTimes,
    faPen,
    faMinus,
    faChevronLeft,
    faChevronRight,
    faChevronDown,
    faChevronUp,
    faSpinner,
    faSave,
    faAngleDoubleDown,
    faCompactDisc,
    faUsersSlash,
    faRobot,
    faVrCardboard,
    faStepForward,
    faStepBackward,
    faPlay,
    faRandom,
    faPause, faPauseCircle, faTimesCircle, faBookDead, faSitemap
} from '@fortawesome/free-solid-svg-icons';
import HeaderNavigation from '../Navigation/HeaderNavigation';
import Footer from "../Footer/Footer";
import StartPage from '../pages/StartPage';
import ArtistsPage from "../pages/ArtistsPage";
import ArtistPage from "../pages/ArtistPage";
import RecordsPage from "../pages/RecordsPage";
import RecordPage from "../pages/RecordPage";
import TracksPage from "../pages/TracksPage";
import UploadPage from "../pages/UploadPage";
import MusicStore from "../MusicStore/MusicStore";
import GlobalTrackStore from "../MusicStore/GlobalTrackStore";
import {showUpload} from "../Navigation/FooterNavigation";

library.add(faAirbnb, faSitemap, faBookDead, faStepForward, faTape, faRandom, faStepBackward, faFilter, faDownload, faGoogle, faFacebookF, faArrowAltCircleLeft, faArrowAltCircleDown, faArrowDown, faArrowUp, faArrowAltCircleUp, faCopyright, faWrench, faHome, faRecordVinyl,
    faMusic, faSearch, faUserAstronaut, faPlayCircle, faPlay, faPause, faPauseCircle, faPlus, faTimes, faTimesCircle, faPen, faMinus, faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faSpinner, faSave,
    faAngleDoubleDown, faCompactDisc, faUsersSlash, faRobot, faVrCardboard);

const App = () => {
    return (
        <MusicStore>
            <GlobalTrackStore>
                <Router>
                    <HeaderNavigation/>
                    <div className="container-fluid standard-container">
                        <Route exact path={ROUTES.START} component={StartPage}/>
                        <Route path={ROUTES.ARTISTS} component={ArtistsPage}/>
                        <Route path={ROUTES.ARTIST} component={ArtistPage}/>
                        <Route path={ROUTES.RECORDS} component={RecordsPage}/>
                        <Route path={ROUTES.RECORD} component={RecordPage}/>
                        <Route path={ROUTES.TRACKS} component={TracksPage}/>
                        {showUpload ? <Route path={ROUTES.UPLOAD} component={UploadPage}/> : false}
                    </div>
                    <Footer/>
                </Router>
            </GlobalTrackStore>
        </MusicStore>
    )
};

export default App;
