import React from 'react';
import TodoComponent from "../../../components/MicroComponents";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import * as ROUTES from "../../../constants/routes";

const StartPage = () => (
    <div className="row">
        <div className="standard-main-column">
            <h1>The Baseball Field & Friends gg</h1>
            <p>The music scene in Nyköping has delivered great music since the mid 90's. </p>
            <p>This website, former home of band The Baseball Field and music labels Vanishing Vanity Music and Strandad
                Sjöbuse Records, now brings you that music in a modern way.</p>
            <p>Here is a <a href="/old">link</a> to the old site</p>
            <TodoComponent todo="In development"/>
            <div className="mb-5 standard-box-wrapper__near-dark">
            </div>
        </div>
        <div className="standard-secondary-column">
            <div className="mb-5 standard-box-wrapper__near-dark">
            </div>
        </div>
        <div className="standard-main-column small"><FontAwesomeIcon icon={['far', 'copyright']} /> 2020  <Link to={ROUTES.SIGN_UP}>Joakim Johnsson</Link></div>
    </div>
);
export default StartPage;
