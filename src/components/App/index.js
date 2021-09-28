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
    faJournalWhills,
    faExternalLinkAlt,
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
    faLowVision,
    faCompactDisc,
    faUsersSlash,
    faRobot,
    faPalette,
    faUniversalAccess,
    faHatWizard,
    faVrCardboard,
    faGraduationCap,
    faSignLanguage,
    faTv,
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
import NavigationStore from "../NavigationStore/NavigationStore";
import DevopsPage from "../pages/DevopsPage";

library.add(faAirbnb, faHatWizard, faSitemap, faPalette, faBookDead, faSignLanguage, faUniversalAccess, faLowVision, faJournalWhills, faStepForward, faTape, faExternalLinkAlt, faRandom, faStepBackward, faFilter, faDownload, faGoogle, faFacebookF, faArrowAltCircleLeft, faArrowAltCircleDown, faArrowDown, faArrowUp, faArrowAltCircleUp, faCopyright, faWrench, faHome, faRecordVinyl,
    faMusic, faSearch, faTv, faGraduationCap, faUserAstronaut, faPlayCircle, faPlay, faPause, faPauseCircle, faPlus, faTimes, faTimesCircle, faPen, faMinus, faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faSpinner, faSave,
    faAngleDoubleDown, faCompactDisc, faUsersSlash, faRobot, faVrCardboard);

const App = () => {
    return (
        <NavigationStore>
            <MusicStore>
                <GlobalTrackStore>
                    <Router>
                        <HeaderNavigation/>
                        <Route exact path={ROUTES.START} component={StartPage}/>
                        <Route path={ROUTES.ARTISTS} component={ArtistsPage}/>
                        <Route path={ROUTES.ARTIST} component={ArtistPage}/>
                        <Route path={ROUTES.RECORDS} component={RecordsPage}/>
                        <Route path={ROUTES.RECORD} component={RecordPage}/>
                        <Route path={ROUTES.TRACKS} component={TracksPage}/>
                        <Route path={ROUTES.DEVOPS} component={DevopsPage}/>
                        {showUpload ? <Route path={ROUTES.UPLOAD} component={UploadPage}/> : false}
                        <Footer/>
                    </Router>
                </GlobalTrackStore>
            </MusicStore>
        </NavigationStore>
    )
};

export default App;
