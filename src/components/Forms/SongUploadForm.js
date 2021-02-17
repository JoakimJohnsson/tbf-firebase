import React from 'react';
import firebase from "firebase";

function doIt(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    // Add a new document in collection "cities"
    firebase.firestore().collection("cities").doc("LA").set({
        name: "Los Angeles",
        state: "CA",
        country: "USA"
    })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

const UploadSongForm = () => {
    return (
        <div>
            <button className="btn btn-secondary"
                    onClick={doIt}>
                Do it
            </button>
        </div>
    )
}
export default UploadSongForm;
