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
                <DashboardModal node={props.node} index={props.index}/>
            </div>
            <div className="card-body">
                <p>
                    <TodoComponent todo="Todo"/>
                </p>
            </div>
        </div>
    </div>
);

const DashboardModal = (props) => (
    <>
        <div className="modal fade" id={`modal-${props.index}-${props.node}`} tabIndex="-1" role="dialog"
             aria-labelledby={`#modal-label-${props.index}-${props.node}`}
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id={`modal-label-${props.index}-${props.node}`}>Add {props.node}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        ...
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
        <a href="" className="btn btn-secondary btn-card-header" type="button" data-toggle="modal"
           data-target={`#modal-${props.index}-${props.node}`}>
            <span className="mr-2">Add {props.node}</span>
            <FontAwesomeIcon icon="plus"/>
        </a>
    </>
);
export default DashboardCard;
