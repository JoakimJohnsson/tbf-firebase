import React from 'react';
import TodoComponent from "../../../components/MicroComponents";
import {compose} from 'recompose';
import {withAuthorization, withEmailVerification} from '../../../components/Session';

const AdminHomePage = () => (
    <div className="row">
        <div className="standard-main-column">
            <h1>Dashboard</h1>
            <p>Congratulations - you are now signed in.</p>
            <TodoComponent todo="Dashboard"/>
        </div>
    </div>
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(AdminHomePage);
