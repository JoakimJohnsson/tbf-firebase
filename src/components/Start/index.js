import React from 'react';
import {SignInForm} from "../SignIn";
import {SignUpLink} from "../SignUp";
import {PasswordForgetLink} from '../PasswordForget';

const StartPage = () => (
    <div className="row">
        <div className="standard-main-column">
            <h1>The Baseball Field & Friends</h1>
            <p>Do You miss all those fine lo-fi tunes of the 90's and early 2000's? Now you'll
                have the <a href="www.su.se">En länk här i texten</a> opportunity to stream all the music from such labels as - Vanishing Vanity Music, [U][R][U] and
                Strandad Sjöbuse Records for free.</p>
            <p className="standard-box-wrapper__near-dark text-yellow">STATUS 2020-02-15: In development, all accounts
                will be deleted.</p>
            <SignUpLink/>
        </div>
        <div className="standard-secondary-column">
            <div className="mb-5 standard-box-wrapper__near-dark">
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
