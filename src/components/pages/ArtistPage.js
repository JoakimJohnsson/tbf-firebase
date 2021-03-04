import React from 'react';
import {FetchArtistFromId} from "../../api-functions/artists-api";
import firebase from "firebase";
import ArtistPageMainColumn from "./pagesComponents/ArtistPageMainColumn";
import ArtistPageSecondaryColumn from "./pagesComponents/ArtistPageSecondaryColumn";

const ArtistPage = ({match}) => {
    const {params: {id}} = match;
    const artist = FetchArtistFromId(id);
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
            <ArtistPageSecondaryColumn id={id} artist={artist} rand={rand} rand2={rand2}/>
            <ArtistPageMainColumn id={id}/>
        </div>
    );
};

export default ArtistPage;
