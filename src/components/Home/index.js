import React from 'react';
import TodoComponent from "../microComponents";
import withAuthorization from "../Session/withAuthorization";

const HomePage = () => (
    <div className="row">
        <div className="standard-main-column">
            <TodoComponent todo="Har lite grejer att göra" />
            <h1>Dashboard</h1>
            <p>Sign up worked like a charm - you are now also signed in.</p>
            <p>Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very Nice
                text. Bacon ipsim and so forth.</p>
        </div>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
