import React from 'react';
import {withFirebase} from "../Firebase";

const SignOutButton = ({firebase}) => (
    <span className="border-top border-lg-none mt-3 mt-lg-0 pt-4 pt-lg-0 pb-3 pb-lg-0">
        <button className="btn btn-secondary ml-0 ml-lg-4 " type="button" onClick={firebase.doSignOut}>
            Sign out
        </button>
    </span>
);
export default withFirebase(SignOutButton);
