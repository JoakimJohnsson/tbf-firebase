import React from 'react';
import {compose} from 'recompose';
import {withAuthorization, withEmailVerification} from '../../../components/Session';
import PersonsDashboardCard from "../../../components/DashboardComponents/classes/persons";
import ArtistsDashboardCard from "../../../components/DashboardComponents/classes/artists";
import ImagesDashboardCard from "../../../components/DashboardComponents/classes/images";
import SongsDashboardCard from "../../../components/DashboardComponents/classes/songs";
import RolesDashboardCard from "../../../components/DashboardComponents/classes/roles";

const DashBoardPage = () => (
    <div className="row">
        <div className="standard-fullwidth-column">
            <h1>Dashboard</h1>
            <p>Congratulations - you are now signed in.</p>
            <div className="row">
                <PersonsDashboardCard />
                <ArtistsDashboardCard />
                <ImagesDashboardCard />
                <SongsDashboardCard />
                <RolesDashboardCard />
            </div>
        </div>
    </div>
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(DashBoardPage);
export {DashBoardPage};
