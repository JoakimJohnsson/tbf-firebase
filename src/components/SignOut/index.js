import React from 'react';
import {withFirebase} from "../Firebase";

const SignOutButton = ({firebase}) => (
    <button className="btn btn-secondary ml-0 ml-lg-4" type="button" onClick={firebase.doSignOut}>
        Sign out
    </button>
);
export default withFirebase(SignOutButton);
