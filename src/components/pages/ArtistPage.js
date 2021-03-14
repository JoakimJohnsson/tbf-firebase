import React, {useState} from 'react';
import {FetchArtistFromId} from "../../api-functions/artists-api";
import firebase from "firebase";
import imgUnavailable from "../../images/image_unavailable.png";
import * as STRINGS from "../../constants/strings";
import MembersByArtist from "../lists/MembersByArtist";
import {CopyrightInformation} from "../MicroComponents/MicroComponents";
import RecordsByArtist from "../lists/RecordsByArtist";
import {TracksByArtistWithPlayer} from "../lists/TracksByArtist";
import TrackPlayer from "../cards/TrackPlayer";

const ArtistPage = ({match}) => {
    const {params: {id}} = match;
    const artist = FetchArtistFromId(id);
    const [currentTrack, setCurrentTrack] = useState(null);
    const setCurrentTrackOnClick = (songId) => {
        setCurrentTrack(songId);
    }
    const destroyCurrentTrack = () => {
        setCurrentTrack(null);
    }
    let rand = Math.floor(Math.random() * 16) + 1;
    let rand2 = Math.floor(Math.random() * 8) + 1;

    // Increment number of views
    const increment = firebase.firestore.FieldValue.increment(1);
    firebase.firestore().collection("artists").doc(id)
        .update({numberOfViews: increment}).then(function () {
        console.log("Document successfully updated!");
    })
        .catch(function (error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });

    return (
        <div className="row">
            <div className="standard-secondary-column">
                <div className="standard-box-wrapper__near-dark">
                    <h1 className={`logo-font-family__${rand.toString()} text-uppercase text-color-variant__${rand2.toString()}`}>{artist.name}</h1>
                    <img className="w-100 mb-3 opacity-4" alt={`${artist.name}`} src={artist.imgUrl || imgUnavailable}/>
                    <h2>Description</h2>
                    <p>
                        <span className="text-capitalize">{artist.name} </span>
                        {artist.description !== "" ?
                            artist.description
                            :
                            artist.imgUrl === "" ?
                                STRINGS.DEFAULT_ARTIST_DESCRIPTION_MISSING_IMAGE
                                :
                                STRINGS.DEFAULT_ARTIST_DESCRIPTION}
                    </p>
                    <h2>Members</h2>
                    <MembersByArtist artistId={id}/>
                    <CopyrightInformation className={"d-none d-lg-block"}/>
                </div>
            </div>
            <div className="standard-main-column">
                <div className="standard-main-column__section">
                    <h2 className="section-header">Records</h2>
                    <RecordsByArtist artistId={id}/>
                    <h2 className="section-header">Tracks</h2>
                    <TracksByArtistWithPlayer artistId={id} currentTrack={currentTrack} setCurrentTrackOnClick={setCurrentTrackOnClick}/>
                    {currentTrack ? <TrackPlayer id={currentTrack} key={currentTrack} destroyCurrentTrack={destroyCurrentTrack}/> : false}
                </div>
                <CopyrightInformation className={"d-block d-lg-none mt-5"}/>
            </div>
        </div>
    );
};

export default ArtistPage;
