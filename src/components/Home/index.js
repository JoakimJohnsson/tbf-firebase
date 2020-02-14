import React from 'react';
import withAuthorization from "../Session/withAuthorization";

const HomePage = () => (
    <div className="row">
        <div className="col-12 col-lg-6">
            <h1>Home of The Baseball Field & Friends</h1>
            <p className="lead">Sign up worked like a charm - you are now also signed in.</p>
            <p>Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very Nice
                text. Bacon ipsim and so forth.</p>
        </div>
    </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
