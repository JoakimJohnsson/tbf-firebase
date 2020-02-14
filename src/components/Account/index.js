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
                    <h1>The account for: {authUser.email}</h1>
                    <p className="lead">Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very Nice
                        text. Bacon ipsim and so forth.</p>
                    <p>Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very Nice
                        text. Bacon ipsim and so forth.</p>
                    <PasswordForgetForm/>
                    <PasswordChangeForm/>
                </div>
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
