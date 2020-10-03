import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import MembersByArtistList from "../../components/listcomponents/simple/MembersByArtistList";
import {CopyrightInfoComponent} from "../../components/MicroComponents";

const ArtistPage = ({match, location}) => {
    const {params: {id}} = match;
    return (
        <div className="row">
            <div className="standard-main-column">
                Artist - {id}
                <MembersByArtistList artistId={id}/>
                <p>
                    <strong>Match Props: </strong>
                    <code>{JSON.stringify(match, null, 2)}</code></p>
                <p>
                    <strong>Location Props: </strong>
                    <code>{JSON.stringify(location, null, 2)}</code></p>
            </div>
            <div className="standard-secondary-column">
                <div className="mb-5 standard-box-wrapper__near-dark">
                    <h1>{id}</h1>
                    <p>The music scene in Nyköping has delivered great music since the early 90's. </p>
                    <p>This website, former home of band <b>The Baseball Field</b> and music labels <b>Vanishing Vanity
                        Music</b> and <b>Strandad
                        Sjöbuse Records</b>, now brings you that good old music in a modern way.</p>

                    <CopyrightInfoComponent/>
                </div>
            </div>
        </div>
    );
};

export default ArtistPage;
