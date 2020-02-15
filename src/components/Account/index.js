import React from 'react';
import AuthUserContext from "../Session/context";
import {PasswordForgetForm} from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from "../Session/withAuthorization";

const AccountPage = () => (

    <AuthUserContext.Consumer>
        {authUser => (
            <div className="row">
                <div className="col-12">

                    <h1>The account for: {authUser.uid}</h1>
                    <h2>E-mail: {authUser.email}</h2>
                    <p className="lead">Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text
                        about the app. Very Nice
                        text. Bacon ipsim and so forth.</p>
                    <p>Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very
                        Nice
                        text. Bacon ipsim and so forth.</p>
                    <div class="standard-box-wrapper__near-dark col-12 col-lg-6">
                        <h3>Have you forgotten your password?</h3>
                        <PasswordForgetForm/>
                        <h3>Change password here???</h3>
                        <PasswordChangeForm/>
                    </div>
                </div>
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
