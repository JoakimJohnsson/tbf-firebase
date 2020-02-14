import React from 'react';
import {SignInForm} from "../SignIn";
import {SignUpLink} from "../SignUp";
import {PasswordForgetLink} from '../PasswordForget';

const StartPage = () => (
    <div className="row">
        <div className="col-12 col-lg-8 pr-0 pr-lg-5">
            <h1>The Baseball Field & Friends</h1>
            <p className="lead">Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the
                app. Very Nice
                text. Bacon ipsim and so forth.</p>
            <p>Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very Nice
                text. Bacon ipsim and so forth.</p>
            <p>Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very Nice
                text. Bacon ipsim and so forth.</p>
            <SignUpLink/>
        </div>
        <div className="col-12 col-lg-4">
            <div className="mb-5">
                <h2>Sign in</h2>
                <SignInForm/>
                <PasswordForgetLink/>
            </div>
            <div>

            </div>
        </div>
    </div>
);
export default StartPage;
