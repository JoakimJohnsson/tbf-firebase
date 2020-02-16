import React from 'react';
import TodoComponent from "../microComponents";
import withAuthorization from "../Session/withAuthorization";

const HomePage = () => (
    <div className="row">
        <div className="standard-main-column">
            <h1>Dashboard</h1>
            <p>Sign up worked like a charm - you are now also signed in.</p>
            <TodoComponent todo="Dashboard" />
        </div>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
