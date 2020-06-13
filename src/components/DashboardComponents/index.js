import React from 'react';
/*import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import {withFirebase} from "../Firebase";*/
import TodoComponent from "../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import * as NODES from "../../constants/nodes";
import AddPersonsForm from "./forms/addPersonsForm";
import AddRolesForm from "./forms/addRolesForm";
import AddSongsForm from "./forms/addSongsForm";
import AddArtistsForm from "./forms/addArtistsForm";
import AddImagesForm from "./forms/addImagesForm";
import Persons from "./classes/persons";
import Roles from "./classes/roles";
import Songs from "./classes/songs";
import Artists from "./classes/artists";
import Images from "./classes/images";

const DashboardCard = (props) => (
    <div className="col-12 col-lg-6 mb-3">
        <div className="card h-100 dashboard-card">
            <div className="card-header">
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
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
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
    <>
    {(() => {
        switch (props.node) {
            case NODES.PERSONS:
                return <Persons />;
            case NODES.ROLES:
                return <Roles />;
            case NODES.SONGS:
                return <Songs />;
            case NODES.ARTISTS:
                return <Artists />;
            case NODES.IMAGES:
                return <Images />;
            default:
                return <TodoComponent todo="No list found"/>;
        }
    })()}
    </>
);

const DashboardListUl = ({ list }) => (
    <ul className="list-group list-group-flush">
        {list.map(item => (
            <DashboardListLi key={item.uid} listItem={item}/>
        ))}
    </ul>
);

const DashboardListLi = ({ listItem }) => (
    <li className="list-group-item">
        {listItem.name}
    </li>
);

export default DashboardCard;
export {DashboardListUl, DashboardListLi};
