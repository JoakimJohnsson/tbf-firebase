import React from 'react';
/*import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";*/
import TodoComponent from "../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as NODES from "../../constants/nodes";
import AddPeopleForm from "./addPeopleForm";
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
                        <button type="button" className="btn btn-close-secondary" data-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon="times"/>
                        </button>
                    </div>
                    <div className="modal-body">
                        {(() => {
                            switch (props.node) {
                                case NODES.PEOPLE:
                                    return <AddPeopleForm />;
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
export default DashboardCard;
