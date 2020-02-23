import React from 'react';
import TodoComponent from "../../../components/MicroComponents";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const ArtistPage = () => (
    <div className="row">
        <div className="standard-main-column">
            <h1>Artists</h1>
            <p>The music scene in Nyköping has delivered great music since the mid 90's. </p>
            <p>This website, former home of band The Baseball Field and music labels Vanishing Vanity Music and Strandad
                Sjöbuse Records, now brings you that music in a modern way.</p>
            <p>Here is a <a href="/old">link</a> to the old site</p>
            <TodoComponent todo="In development, all accounts will be deleted."/>
            <div className="mb-5 standard-box-wrapper__near-dark">
            </div>
        </div>
        <div className="standard-secondary-column">
            <div className="mb-5 standard-box-wrapper__near-dark">

                {/*TODO: Component with icon and centered text below to use in footer nav*/}
                <FontAwesomeIcon icon="home" size="2x"/>
                <FontAwesomeIcon icon="record-vinyl" size="2x"/>
                <FontAwesomeIcon icon="music" size="2x"/>

            </div>
        </div>
    </div>
);
export default ArtistPage;
