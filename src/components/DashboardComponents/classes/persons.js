import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {DashboardListItemButton, LoadingComponent} from "../../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddPersonsForm from "../forms/addPersonsForm";

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
    onRemovePerson = uid => {
        this.props.firebase.person(uid).remove();
    };

    // onEditPerson = () => {
    // ...
    // };

    render() {
        const { persons, loading } = this.state;
        return (
            <div>
                {loading && <LoadingComponent />}
                {persons ? (
                    <PersonsListUl
                        list={persons}
                        onRemove={this.onRemovePerson}
                    />
                ) : (
                    <div>There are no persons ...</div>
                )}
            </div>
        );
    }
}

const PersonsDashboardCard = () => (
    <div className="col-12 col-lg-6 mb-3">
        <div className="card h-100 dashboard-card">
            <div className="card-header">
                <h3 className="text-uppercase m-0 pt-2">Persons</h3>
                <PersonsDashboardModal />
            </div>
            <div className="card-body">
                <Persons />
            </div>
            <div className="card-footer align-items-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#/" tabIndex="-1" aria-label="Previous">
                                <FontAwesomeIcon icon="chevron-left"/>
                            </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#/">1</a></li>
                        <li className="page-item"><a className="page-link" href="#/">2</a></li>
                        <li className="page-item"><a className="page-link" href="#/">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#/" aria-label="Next">
                                <FontAwesomeIcon icon="chevron-right"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
);

const PersonsDashboardModal = () => (
    <>
        <div className="modal fade" id="modal-010-persons" tabIndex="-1" role="dialog"
             aria-labelledby="modal-label-010-persons"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-label-010-persons">Add Person</h5>
                        <button type="button" className="btn btn-fa__secondary" data-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon="times"/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <AddPersonsForm />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-secondary btn-card-header" data-toggle="modal" aria-label="Add Person"
                data-target="#modal-010-persons">
            <FontAwesomeIcon icon="plus"/>
        </button>
    </>
);

const PersonsListUl = ({ list, onRemove }) => (
    <ul className="dashboard-list list-group list-group-flush">
        {list.map(item => (
            <PersonsListLi
                key={item.uid}
                listItem={item}
                onRemove={onRemove}
            />
        ))}
    </ul>
);

const PersonsListLi = ({ listItem, onRemove }) => (
    <li className="list-group-item">
        <div>{listItem.name}</div>
        <div>
            <span className="mr-2">
            <DashboardListItemButton
                onClick={onRemove}
                listItem={listItem}
                icon={"times"}
                action={"Delete"}
            />
            </span>
            <span>
            <DashboardListItemButton
                onClick={onRemove}
                listItem={listItem}
                icon={"pen"}
                action={"Edit"}
            />
            </span>
        </div>
    </li>
);

const Persons = withFirebase(PersonsBase);

export default PersonsDashboardCard;