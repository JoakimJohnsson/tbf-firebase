import React from 'react';
import {withFirebase} from "../Firebase";

const SignOutButton = ({firebase}) => (
    <button class="btn btn-outline-secondary ml-0 ml-lg-4" type="button" onClick={firebase.doSignOut}>
        SignOut
    </button>
);
export default withFirebase(SignOutButton);
