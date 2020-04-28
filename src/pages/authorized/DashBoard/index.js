import React from 'react';
import DashboardCard from "../../../components/DashboardComponents";
import {compose} from 'recompose';
import {withAuthorization, withEmailVerification} from '../../../components/Session';

const DashBoardPage = () => (
    <div className="row">
        <div className="standard-fullwidth-column">
            <h1>Dashboard</h1>
            <p>Congratulations - you are now signed in.</p>

            <div className="row">
                <DashboardCard header={"People"}/>
                <DashboardCard header={"Affiliations"}/>
                <DashboardCard header={"Roles"}/>
                <DashboardCard header={"Songs"}/>
                <DashboardCard header={"Artists"}/>
                <DashboardCard header={"Images"}/>
            </div>
        </div>
    </div>
);

const condition = authUser => !!authUser;

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(DashBoardPage);
