import React from 'react';
import PasswordChangeForm from '../../../components/PasswordChange';
import {compose} from 'recompose';
import {AuthUserContext, withAuthorization, withEmailVerification,} from '../../../components/Session';

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className="row">
                <div className="standard-main-column">
                    <h1>Your account:</h1>
                    <h2>User id</h2>
                    <p>{authUser.uid}</p>
                    <h2>User name</h2>
                    <p>{authUser.username}</p>
                    <h2>E-mail</h2>
                    <p>{authUser.email}</p>
                </div>
                <div className="standard-secondary-column">
                    <div className="standard-box-wrapper__near-dark">
                        <h2>Change password?</h2>
                        <PasswordChangeForm/>
                    </div>
                </div>
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(AccountPage);
