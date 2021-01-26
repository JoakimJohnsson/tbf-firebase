import React from 'react';
import {compose} from 'recompose';
import {withAuthorization, withEmailVerification} from '../../../components/Session';
import ArtistsDashboardCard from "../../../components/DashboardComponents/classes/artists";
import ImagesDashboardCard from "../../../components/DashboardComponents/classes/images";
import ImageUploadForm from "../ImageUpload";

const DashBoardPage = () => (
    <div className="row">
        <div className="standard-fullwidth-column">
            <h1>Dashboard</h1>
            <p>Add, edit and remove content from our <a href={"https://firebase.google.com"}>Firebase Realtime Database</a>.</p>
            <div className="row">
                <ArtistsDashboardCard />
                <ImagesDashboardCard />
            </div>
        </div>
        <ImageUploadForm />
    </div>
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(DashBoardPage);
export {DashBoardPage};