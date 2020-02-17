import React from 'react';
import AuthUserContext from "../Session/context";
import {PasswordForgetForm} from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from "../Session/withAuthorization";
import TodoComponent from "../microComponents";

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
                    <h2>Email</h2>
                    <p>{authUser.email}</p>
                    <TodoComponent todo="Display current user data" />
                </div>
                <div className="standard-secondary-column">
                    <div className="standard-box-wrapper__near-dark">
                        <h2>Forgot password</h2>
                        <PasswordForgetForm/>
                        <h2>Change password?</h2>
                        <PasswordChangeForm/>
                    </div>
                </div>
            </div>
        )}
    </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
