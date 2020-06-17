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
        this.setState({loading: true});
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
                this.setState({persons: null, loading: false});
            }
        });
    }

    componentWillUnmount() {
        this.props.firebase.persons().off();
    }

    onRemovePerson = uid => {
        this.props.firebase.person(uid).remove();
    };

    onEditPerson = () => {
        return;
    };

    render() {
        const {persons, loading} = this.state;
        return (
            <div>
                {loading && <LoadingComponent/>}
                {persons ? (
                    <PersonsListUl
                        list={persons}
                        onRemove={this.onRemovePerson}
                        onEdit={this.onEditPerson}
                    />
                ) : (
                    <div>There are no persons ...</div>
                )}
            </div>
        );
    }
}

const PersonsDashboardCard = () => (
    <div className="col-12 col-xl-6 mb-3">
        <div className="card h-100 dashboard-card">
            <div className="card-header">
                <h3 className="text-uppercase m-0 pt-2">Persons</h3>
                <PersonsDashboardModal/>
            </div>
            <div className="card-body">
                <Persons/>
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
                        <AddPersonsForm/>
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

const PersonsListUl = ({list, onRemove, onEdit}) => (
    <ul className="dashboard-list list-group list-group-flush">
        {list.map(item => (
            <PersonsListItem
                key={item.uid}
                listItem={item}
                onRemove={onRemove}
                onEdit={onEdit}
            />
        ))}
    </ul>
);

const PersonsListLi = ({listItem, onRemove, onEdit}) => (
    <li className="list-group-item">
        <div className="list-group-header py-3">
            <div>
                {listItem.firstName.toUpperCase()} {listItem.lastName.toUpperCase()}
            </div>
            <span>
            <DashboardListItemButton
                onClick={onRemove}
                listItem={listItem}
                icon={"times"}
                action={"Delete"}
            />
        </span>
        </div>

        <ul className="dashboard-list list-group list-group-flush">
            <li className="list-group-item flex-me">
                First name: {listItem.firstName}
                <span>
            <DashboardListItemButton
                onClick={onEdit}
                listItem={listItem}
                icon={"pen"}
                action={"Edit"}
            />
            </span>
            </li>
            <li className="list-group-item flex-me">
                Last name: {listItem.lastName}
                <span>
            <DashboardListItemButton
                onClick={onEdit}
                listItem={listItem}
                icon={"pen"}
                action={"Edit"}
            />
            </span>
            </li>
            <li className="list-group-item flex-me">
                Description: {listItem.description}
                <span>
            <DashboardListItemButton
                onClick={onEdit}
                listItem={listItem}
                icon={"pen"}
                action={"Edit"}
            />
            </span>
            </li>
        </ul>
        <div>
        </div>
    </li>
);

class PersonsListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            editFirstName: this.props.listItem.firstName,
            editLastName: this.props.listItem.lastName,
            editDescription: this.props.listItem.firstName,
        };
    }

    onToggleEditMode = () => {
        this.setState(state => ({
            editMode: !state.editMode,
            editFirstName: this.props.listItem.firstName,
            editLastName: this.props.listItem.lastName,
            editDescription: this.props.listItem.firstName,
        }));
    };

    onChangeEditFirstName = event => {
        this.setState({editFirstName: event.target.value});
    };
    onChangeEditLastName = event => {
        this.setState({editLastName: event.target.value});
    };
    onChangeEditDescription = event => {
        this.setState({editFirstName: event.target.value});
    };

    onSaveEditFirstName = () => {
        this.props.onEditPerson(this.props.listItem, this.state.editFirstName);
        this.setState({editMode: false});
    };

    onSaveEditLastName = () => {
        this.props.onEditPerson(this.props.listItem, this.state.editLastName);
        this.setState({editMode: false});
    };

    onSaveEditDescription = () => {
        this.props.onEditPerson(this.props.listItem, this.state.editDescription);
        this.setState({editMode: false});
    };

    // TODO:
    render() {
        const {listItem, onRemove} = this.props;
        const {editMode, onEdit} = this.state;

        return (

            <li className="list-group-item">
                <div className="list-group-header py-3">
                    <div>
                        {listItem.firstName.toUpperCase()} {listItem.lastName.toUpperCase()}
                    </div>
                    {!editMode && (
                        <span>
                        <DashboardListItemButton
                            onClick={onRemove}
                            listItem={listItem}
                            icon={"times"}
                            action={"Delete"}
                        />
                    </span>
                    )}
                </div>

                <ul className="dashboard-list list-group list-group-flush">
                    <li className="list-group-item flex-me">
                        First name: {listItem.firstName}
                        <div>
                            {editMode ? (
                                <span>
                                    <DashboardListItemButton
                                        onClick={this.onSaveEditFirstName}
                                        listItem={listItem}
                                        icon={"save"}
                                        action={"Save"} />
                                    <DashboardListItemButton
                                        onClick={this.onToggleEditMode}
                                        listItem={listItem}
                                        icon={"eraser"}
                                        action={"Reset field"} />
                                </span> ) : (
                                        <DashboardListItemButton
                                            onClick={this.onToggleEditMode}
                                            listItem={listItem}
                                            icon={"pen"}
                                            action={"Edit"}
                                        />
                                    )}
                        </div>
                    </li>
                    <li className="list-group-item flex-me">
                        Last name: {listItem.lastName}
                        <div>
                            {editMode ? (
                                <span>
                                    <DashboardListItemButton
                                        onClick={this.onSaveEditLastName}
                                        listItem={listItem}
                                        icon={"save"}
                                        action={"Save"} />
                                    <DashboardListItemButton
                                        onClick={this.onToggleEditMode}
                                        listItem={listItem}
                                        icon={"eraser"}
                                        action={"Reset field"} />
                                </span> ) : (
                                <DashboardListItemButton
                                    onClick={this.onToggleEditMode}
                                    listItem={listItem}
                                    icon={"pen"}
                                    action={"Edit"}
                                />
                            )}
                        </div>
                    </li>
                    <li className="list-group-item flex-me">
                        Description: {listItem.description}
                        <span>
            <DashboardListItemButton
                onClick={onEdit}
                listItem={listItem}
                icon={"pen"}
                action={"Edit"}
            />
            </span>
                    </li>
                </ul>
            </li>
        );
    }
}

const Persons = withFirebase(PersonsBase);

export default PersonsDashboardCard;