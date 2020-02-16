import React from 'react';
import AuthUserContext from "../Session/context";
import {PasswordForgetForm} from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from "../Session/withAuthorization";

const AccountPage = () => (
    <AuthUserContext.Consumer>
        {authUser => (
            <div className="row">
                <div className="standard-main-column">

                    <h1>Your account:</h1>
                    <p>Uid: {authUser.uid}</p>
                    <p>E-mail: {authUser.email}</p>
                    <p className="text-yellow">TODO: Display current user data</p>
                    <p className="text-yellow">TODO: Display current user data</p>
                    <p className="text-yellow">TODO: En TODO-component som tar en input text och renderar fint</p>
                </div>
                <div className="standard-secondary-column">
                    <div className="standard-box-wrapper__near-dark">
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
