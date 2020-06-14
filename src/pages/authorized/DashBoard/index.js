import React from 'react';
import DashboardCard from "../../../components/DashboardComponents";
import * as NODES from '../../../constants/nodes';
import {compose} from 'recompose';
import {withAuthorization, withEmailVerification} from '../../../components/Session';

const DashBoardPage = () => (
    <div className="row">
        <div className="standard-fullwidth-column">
            <h1>Dashboard</h1>
            <p>Congratulations - you are now signed in.</p>

            <div className="row">

                {DashboardCards}

            </div>

        </div>
    </div>
);

const condition = authUser => !!authUser;

const DashboardCards = NODES.NODES_LIST.map((node, index) =>
    <DashboardCard key={index} node={node} index={index} />
);

export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(DashBoardPage);
export {DashboardCards};
