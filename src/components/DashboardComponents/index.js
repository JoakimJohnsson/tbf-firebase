import React from 'react';
/*import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";*/
import TodoComponent from "../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as NODES from "../../constants/nodes";
import AddPersonsForm from "./addPersonsForm";
import AddAffiliationsForm from "./addAffiliationsForm";
import AddRolesForm from "./addRolesForm";
import AddSongsForm from "./addSongsForm";
import AddArtistsForm from "./addArtistsForm";
import AddImagesForm from "./addImagesForm";

const DashboardCard = (props) => (
    <div className="col-12 col-lg-6 mb-3">
        <div className="card h-100 ">
            <div className="card-header dashboard-card">
                <h3 className="text-uppercase m-0 pt-2">{props.node}</h3>
                <DashboardModal node={props.node} index={props.index}/>
            </div>
            <div className="card-body">
                    <DashboardList node={props.node} index={props.index}/>
            </div>
            <div className="card-footer align-items-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#" tabIndex="-1" aria-label="Previous">
                                <FontAwesomeIcon icon="chevron-left"/>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <FontAwesomeIcon icon="chevron-right"/>
                            </a>
                        </li>
                    </ul>
                </nav>
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
                        <button type="button" className="btn btn-fa__secondary" data-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon="times"/>
                        </button>
                    </div>
                    <div className="modal-body">
                        {(() => {
                            switch (props.node) {
                                case NODES.PERSONS:
                                    return <AddPersonsForm />;
                                case NODES.AFFILIATIONS:
                                    return <AddAffiliationsForm />;
                                case NODES.ROLES:
                                    return <AddRolesForm />;
                                case NODES.SONGS:
                                    return <AddSongsForm />;
                                case NODES.ARTISTS:
                                    return <AddArtistsForm />;
                                case NODES.IMAGES:
                                    return <AddImagesForm />;
                                default:
                                    return <TodoComponent todo="No form found"/>;
                            }
                        })()}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-secondary btn-card-header" data-toggle="modal" aria-label={`Add ${props.node}`}
           data-target={`#modal-${props.index}-${props.node}`}>
            <FontAwesomeIcon icon="plus"/>
        </button>
    </>
);

const DashboardList = (props) => (
    <ul className="dashboard-list list-group list-group-flush">
        <li className="list-group-item">
            Joakim Johnsson
            <div>
                <button type="button" className="btn btn-fa__tertiary pr-2 border-right" aria-label="Delete">
                <FontAwesomeIcon icon="minus"/>
                </button>
                <button type="button" className="btn btn-fa__tertiary pl-2" aria-label="Edit">
                <FontAwesomeIcon icon="pen"/>
                </button>
            </div>
        </li>
        <li className="list-group-item">
            Joakim Johnsson
            <div>
                <button type="button" className="btn btn-fa__tertiary pr-2 border-right" aria-label="Delete">
                    <FontAwesomeIcon icon="minus"/>
                </button>
                <button type="button" className="btn btn-fa__tertiary pl-2" aria-label="Edit">
                    <FontAwesomeIcon icon="pen"/>
                </button>
            </div>
        </li>
        <li className="list-group-item">
            Joakim Johnsson
            <div>
                <button type="button" className="btn btn-fa__tertiary pr-2 border-right" aria-label="Delete">
                    <FontAwesomeIcon icon="minus"/>
                </button>
                <button type="button" className="btn btn-fa__tertiary pl-2" aria-label="Edit">
                    <FontAwesomeIcon icon="pen"/>
                </button>
            </div>
        </li>
        <li className="list-group-item">
            Joakim Johnsson
            <div>
                <button type="button" className="btn btn-fa__tertiary pr-2 border-right" aria-label="Delete">
                    <FontAwesomeIcon icon="minus"/>
                </button>
                <button type="button" className="btn btn-fa__tertiary pl-2" aria-label="Edit">
                    <FontAwesomeIcon icon="pen"/>
                </button>
            </div>
        </li>
    </ul>
);


export default DashboardCard;
