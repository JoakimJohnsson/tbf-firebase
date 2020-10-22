import React from 'react';
import MembersByArtistList from "../components/lists/MembersByArtistList";
import {CopyrightInfoComponent} from "../components/MicroComponents/MicroComponents";
import {FetchArtistFromId} from "../api-functions/artists-api";
import RecordsByArtistList from "../components/lists/RecordsByArtistList";
import * as STRINGS from "../constants/strings"
import imgUnavailable from "../images/image_unavailable.png";
import firebase from "firebase";
import SongsByArtistList from "../components/lists/SongsByArtistList";

const ArtistPage = ({match}) => {
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
                    <h1 className="text-capitalize">{artist.name}</h1>
                    <img className="w-100 mb-3 opacity-4" alt={`${artist.name}`} src={artist.imgUrl || imgUnavailable}/>
                    <p>
                        <span className="text-capitalize">{artist.name}</span>
                        {artist.description !== ""
                            ? artist.description
                            : artist.imgUrl === ""
                                ? STRINGS.DEFAULT_ARTIST_DESCRIPTION_MISSING_IMAGE
                                : STRINGS.DEFAULT_ARTIST_DESCRIPTION}
                    </p>
                    <h2>Members</h2>
                    <MembersByArtistList artistId={id}/>
                    <CopyrightInfoComponent className={"d-none d-lg-block"}/>
                </div>
            </div>
            <div className="standard-main-column">
                <div className="standard-main-column__section">
                    <h2>Records</h2>
                    <RecordsByArtistList artistId={id}/>

                    <h2>Tracks</h2>
                    <SongsByArtistList artistId={id}/>
                </div>
                <CopyrightInfoComponent className={"d-block d-lg-none mt-5"}/>
            </div>

        </div>
    );
};

export default ArtistPage;
