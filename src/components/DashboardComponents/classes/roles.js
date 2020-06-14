import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {DashboardListItemButton, LoadingComponent} from "../../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddRolesForm from "../forms/addRolesForm";

class RolesBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            roles: [],
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.roles().on('value', snapshot => {
            const roleObject = snapshot.val();
            if (roleObject) {
                const roleList = Object.keys(roleObject).map(key => ({
                    ...roleObject[key],
                    uid: key,
                }));
                this.setState({
                    roles: roleList,
                    loading: false
                });
            } else {
                this.setState({ roles: null, loading: false });
            }
        });
    }
    componentWillUnmount() {
        this.props.firebase.roles().off();
    }
    onRemoveRole = uid => {
        this.props.firebase.role(uid).remove();
    };
    render() {
        const { roles, loading } = this.state;
        return (
            <div>
                {loading && <LoadingComponent />}
                {roles ? (
                    <RolesListUl
                        list={roles}
                        onRemove={this.onRemoveRole}
                    />
                ) : (
                    <div>There are no roles ...</div>
                )}
            </div>
        );
    }
}

const RolesDashboardCard = () => (
    <div className="col-12 col-lg-6 mb-3">
        <div className="card h-100 dashboard-card">
            <div className="card-header">
                <h3 className="text-uppercase m-0 pt-2">Roles</h3>
                <RolesDashboardModal />
            </div>
            <div className="card-body">
                <Roles />
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

const RolesDashboardModal = () => (
    <>
        <div className="modal fade" id="modal-050-roles" tabIndex="-1" role="dialog"
             aria-labelledby="modal-label-050-roles"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-label-050-roles">Add Role</h5>
                        <button type="button" className="btn btn-fa__secondary" data-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon="times"/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <AddRolesForm />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-secondary btn-card-header" data-toggle="modal" aria-label="Add Role"
                data-target="#modal-050-roles">
            <FontAwesomeIcon icon="plus"/>
        </button>
    </>
);

const RolesListUl = ({ list, onRemove }) => (
    <ul className="dashboard-list list-group list-group-flush">
        {list.map(item => (
            <RolesListLi
                key={item.uid}
                listItem={item}
                onRemove={onRemove}
            />
        ))}
    </ul>
);

const RolesListLi = ({ listItem, onRemove }) => (
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

const Roles = withFirebase(RolesBase);

export default RolesDashboardCard;