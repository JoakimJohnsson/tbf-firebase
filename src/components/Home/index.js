import React from 'react';
import withAuthorization from "../Session/withAuthorization";

const HomePage = () => (
    <div>
        <h1>You are home</h1>
        <p>Sign up worked like a charm - you are now also signed in</p>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition) (HomePage);
