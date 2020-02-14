import React from 'react';
import {SignInForm} from "../SignIn";
import {SignUpForm} from "../SignUp";
import {PasswordForgetLink} from '../PasswordForget';

const StartPage = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            <h1>The Baseball Field & Friends</h1>
            <p className="lead">Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the
                app. Very Nice
                text. Bacon ipsim and so forth.</p>
            <p>Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very Nice
                text. Bacon ipsim and so forth.</p>
            <p>Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very Nice
                text. Bacon ipsim and so forth.</p>
        </div>
        <div className="col-12 col-lg-6">

            <div className="mb-5">
                <h2>Sign in</h2>
                <SignInForm/>
                <PasswordForgetLink/>
            </div>
            <div>
                <h2>Sign up</h2>
                <SignUpForm/>
            </div>
        </div>
    </div>
);
export default StartPage;
