import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faAirbnb, faGoogle, faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faArrowAltCircleLeft, faCopyright} from '@fortawesome/free-regular-svg-icons';
import {
    faAngleDoubleDown,
    faArrowAltCircleDown,
    faArrowAltCircleUp,
    faArrowDown,
    faArrowUp,
    faBookDead,
    faChalkboardTeacher,
    faCompactDisc,
    faCodeBranch,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faDatabase,
    faDownload,
    faExternalLinkAlt,
    faFileCode,
    faFrown,
    faFont,
    faFilter,
    faGraduationCap,
    faGrinHearts,
    faHatWizard,
    faHome,
    faIcons,
    faImages,
    faJournalWhills,
    faLaptopCode,
    faLowVision,
    faMeh,
    faMinus,
    faMusic,
    faNetworkWired,
    faPalette,
    faPause,
    faPauseCircle,
    faPen,
    faPlayCircle,
    faPhotoVideo,
    faPlay,
    faPlus,
    faQuestion,
    faRandom,
    faRecordVinyl,
    faRobot,
    faSave,
    faSearch,
    faSignLanguage,
    faSpinner,
    faServer,
    faStepForward,
    faStepBackward,
    faSitemap,
    faSwatchbook,
    faTape,
    faThumbsUp,
    faThumbsDown,
    faTicketAlt,
    faTimes,
    faTimesCircle,
    faTv,
    faUniversalAccess,
    faUserAstronaut,
    faUsersSlash,
    faVrCardboard,
    faWrench
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
import HallerDenPage from "../pages/HallerDenPage";
import HallerDenEpisodePage from "../pages/HallerDenEpisodePage";

library.add(
    faAirbnb,
    faGoogle,
    faFacebookF,
    faArrowAltCircleLeft,
    faCopyright,
    faAngleDoubleDown,
    faArrowAltCircleDown,
    faArrowAltCircleUp,
    faArrowDown,
    faArrowUp,
    faBookDead,
    faChalkboardTeacher,
    faCompactDisc,
    faCodeBranch,
    faChevronDown,
    faChevronLeft,
    faChevronRight,
    faChevronUp,
    faDatabase,
    faDownload,
    faExternalLinkAlt,
    faFileCode,
    faFrown,
    faFont,
    faFilter,
    faGraduationCap,
    faGrinHearts,
    faHatWizard,
    faHome,
    faIcons,
    faImages,
    faJournalWhills,
    faLaptopCode,
    faLowVision,
    faMeh,
    faMinus,
    faMusic,
    faNetworkWired,
    faPalette,
    faPause,
    faPauseCircle,
    faPen,
    faPlayCircle,
    faPhotoVideo,
    faPlay,
    faPlus,
    faQuestion,
    faRandom,
    faRecordVinyl,
    faRobot,
    faSave,
    faSearch,
    faSignLanguage,
    faSpinner,
    faServer,
    faStepForward,
    faStepBackward,
    faSitemap,
    faSwatchbook,
    faTape,
    faThumbsUp,
    faThumbsDown,
    faTicketAlt,
    faTimes,
    faTimesCircle,
    faTv,
    faUniversalAccess,
    faUserAstronaut,
    faUsersSlash,
    faVrCardboard,
    faWrench
);

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
                        <Route exact path={ROUTES.HALLER_DEN} component={HallerDenPage}/>
                        <Route path={ROUTES.HALLER_DEN_MOVIE} component={HallerDenEpisodePage}/>
                        {showUpload ? <Route path={ROUTES.UPLOAD} component={UploadPage}/> : false}
                        <Footer/>
                    </Router>
                </GlobalTrackStore>
            </MusicStore>
        </NavigationStore>
    )
};

export default App;
