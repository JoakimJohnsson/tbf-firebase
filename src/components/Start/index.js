import React from 'react';
import {SignInForm} from "../SignIn";
import {SignUpLink} from "../SignUp";
import {SignInFacebook} from "../SignIn";
import {PasswordForgetLink} from '../PasswordForget';
import TodoComponent from "../microComponents";

const StartPage = () => (
    <div className="row">
        <div className="standard-main-column">
            <h1>The Baseball Field & Friends</h1>
            <p>The music scene in Nyköping has delivered great music since the mid 90's. </p>
            <p>This website, former home of band The Baseball Field and music labels Vanishing Vanity Music and Strandad
                Sjöbuse Records, now brings you that music in a modern way.</p>
            <p>Here is a <a href="/old">link</a> to the old site</p>
            <TodoComponent todo="In development, all accounts will be deleted."/>
            <div className="mb-5 standard-box-wrapper__near-dark">
                <SignUpLink/>
            </div>
        </div>
        <div className="standard-secondary-column">
            <div className="mb-5 standard-box-wrapper__near-dark">
                <h2>Sign in</h2>
                <SignInForm/>
                <PasswordForgetLink/>
                <SignInFacebook />
            </div>
            <div>

            </div>
        </div>
    </div>
);
export default StartPage;
