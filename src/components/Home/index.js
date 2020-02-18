import React from 'react';
import TodoComponent from "../microComponents";
import withAuthorization from "../Session/withAuthorization";

const HomePage = () => (
    <div className="row">
        <div className="standard-main-column">
            <h1>Dashboard</h1>
            <p>Congratulations - you are now signed in.</p>
            <TodoComponent todo="Dashboard" />
        </div>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
