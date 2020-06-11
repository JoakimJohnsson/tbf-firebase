import React, {Component} from 'react';
/*import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";*/
import {withFirebase} from "../Firebase";
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
    <>
    {(() => {
        switch (props.node) {
            case NODES.PERSONS:
                return <Persons />;
            case NODES.AFFILIATIONS:
                return <Affiliations />;
            case NODES.ROLES:
                return <Roles />;
            case NODES.SONGS:
                return <Songs />;
            case NODES.ARTISTS:
                return <Artists />;
            case NODES.IMAGES:
                return <Images />;
            default:
                return <TodoComponent todo="No form found"/>;
        }
    })()}
    </>
);

class PersonsBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            persons: [],
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.persons().on('value', snapshot => {
            const personObject = snapshot.val();
            if (personObject) {
                const personList = Object.keys(personObject).map(key => ({
                    ...personObject[key],
                    uid: key,
                }));
            this.setState({
                persons: personList,
                loading: false
            });
            } else {
                this.setState({ persons: null, loading: false });
            }
        });
    }
    componentWillUnmount() {
        this.props.firebase.persons().off();
    }
    render() {
        const { persons, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}
                {persons ? (
                <PersonList persons={persons} />
                ) : (
                    <div>There are no persons ...</div>
                )}
            </div>
        );
    }
}
const PersonList = ({ persons }) => (
    <ul>
        {persons.map(person => (
            <PersonItem key={person.uid} person={person}/>
        ))}
    </ul>
);
const PersonItem = ({ person }) => (
    <li>
        <strong>{person.uid}</strong> {person.lastName} {person.firstName}
    </li>
);

// class AffiliationsBase extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             persons: [],
//         };
//     }
//     componentDidMount() {
//         this.setState({ loading: true });
//         this.props.firebase.persons().on('value', snapshot => {
//             const personObject = snapshot.val();
//             if (personObject) {
//                 const personList = Object.keys(personObject).map(key => ({
//                     ...personObject[key],
//                     uid: key,
//                 }));
//                 this.setState({
//                     persons: personList,
//                     loading: false
//                 });
//             } else {
//                 this.setState({ persons: null, loading: false });
//             }
//         });
//     }
//     componentWillUnmount() {
//         this.props.firebase.persons().off();
//     }
//     render() {
//         const { persons, loading } = this.state;
//         return (
//             <div>
//                 {loading && <div>Loading ...</div>}
//                 {persons ? (
//                     <PersonList persons={persons} />
//                 ) : (
//                     <div>There are no persons ...</div>
//                 )}
//             </div>
//         );
//     }
// }
// const PersonList = ({ persons }) => (
//     <ul>
//         {persons.map(person => (
//             <PersonItem key={person.uid} person={person}/>
//         ))}
//     </ul>
// );
// const PersonItem = ({ person }) => (
//     <li>
//         <strong>{person.uid}</strong> {person.lastName} {person.firstName}
//     </li>
// );

// class RolesBase extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             persons: [],
//         };
//     }
//     componentDidMount() {
//         this.setState({ loading: true });
//         this.props.firebase.persons().on('value', snapshot => {
//             const personObject = snapshot.val();
//             if (personObject) {
//                 const personList = Object.keys(personObject).map(key => ({
//                     ...personObject[key],
//                     uid: key,
//                 }));
//                 this.setState({
//                     persons: personList,
//                     loading: false
//                 });
//             } else {
//                 this.setState({ persons: null, loading: false });
//             }
//         });
//     }
//     componentWillUnmount() {
//         this.props.firebase.persons().off();
//     }
//     render() {
//         const { persons, loading } = this.state;
//         return (
//             <div>
//                 {loading && <div>Loading ...</div>}
//                 {persons ? (
//                     <PersonList persons={persons} />
//                 ) : (
//                     <div>There are no persons ...</div>
//                 )}
//             </div>
//         );
//     }
// }
// const PersonList = ({ persons }) => (
//     <ul>
//         {persons.map(person => (
//             <PersonItem key={person.uid} person={person}/>
//         ))}
//     </ul>
// );
// const PersonItem = ({ person }) => (
//     <li>
//         <strong>{person.uid}</strong> {person.lastName} {person.firstName}
//     </li>
// );
const Persons = withFirebase(PersonsBase);
// const Affiliations = withFirebase(AffiliationsBase);
// const Roles = withFirebase(RolesBase);

export default DashboardCard;
