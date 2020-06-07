import React from 'react';
/*import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";*/
import TodoComponent from "../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const DashboardCard = (props) => (
    <div className="col-12 col-lg-6 mb-3">
    <div className="card h-100 ">
        <div className="card-header dashboard-card">
            <h3 className="text-uppercase m-0 pt-2">{props.node}</h3>
            <DashboardAddButton node={props.node}/>
        </div>
        <div className="card-body">
            <p>
                <TodoComponent todo="Todo"/>

            </p>
        </div>
        </div>
    </div>
);

const DashboardAddButton = (props) => (
    <button className="btn btn-secondary btn-card-header" type="button">
        <span className="mr-2">Add {props.node}</span>
        <FontAwesomeIcon icon="plus" />
    </button>
);

export default DashboardCard;