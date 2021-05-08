import React, {useContext} from 'react';
import {FetchArtistFromId} from "../../api-functions/artists-api";
import firebase from "firebase";
import imgUnavailable from "../../images/image_unavailable.png";
import MembersByArtist from "../lists/MembersByArtist";
import RecordsByArtist from "../lists/RecordsByArtist";
import {TracksByArtistWithPlayer} from "../lists/TracksByArtist";
import TrackPlayer from "../cards/TrackPlayer";
import CopyrightInformation from "../microComponents/CopyrightInformation";
import ArtistDescription from "../microComponents/Descriptions/ArtistDescription";
import {fontRandomizer, colorRandomizer} from "../microComponents/microComponentsHelper";
import {Context} from "../MusicStore/MusicStore";

const ArtistPage = ({match}) => {
    const [trackState] = useContext(Context);
    const {params: {id}} = match;
    const artist = FetchArtistFromId(id);

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
                    <h1 className={`logo-font-family__${fontRandomizer().toString()} text-uppercase text-color-variant__${colorRandomizer().toString()}`}>{artist.name}</h1>
                    <img className="w-100 mb-3 opacity-4" alt={`${artist.name}`} src={artist.imgUrl || imgUnavailable}/>

                    <ArtistDescription artist={artist}/>
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
                    <TracksByArtistWithPlayer artistId={id}/>
                    {trackState.currentTrack ? <TrackPlayer id={trackState.currentTrack} key={trackState.currentTrack} /> : false}
                </div>
                <CopyrightInformation className={"d-block d-lg-none mt-5"}/>
            </div>
        </div>
    );
};

export default ArtistPage;
