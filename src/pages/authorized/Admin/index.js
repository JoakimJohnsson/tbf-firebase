import React, {Component} from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from '../../../components/Firebase';
import * as ROLES from '../../../constants/roles';
import TodoComponent from "../../../components/MicroComponents";
import {withAuthorization, withEmailVerification} from '../../../components/Session';
import * as ROUTES from '../../../constants/routes';

const AdminPage = () => (
    <div className="row">
        <div className="standard-main-column">
            <h1>Administration</h1>
            <p className="lead">
                The Admin Page is accessible by every signed in admin user.
            </p>
            <p>
                Here, you'll find information about registered users.
            </p>
        </div>
        <div className="standard-secondary-column">
        </div>
        <div className="col-12">
            <Switch>
                <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem}/>
                <Route exact path={ROUTES.ADMINISTRATION} component={UserList}/>
            </Switch>
        </div>
    </div>
);

class UserListBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            users: [],
        };
    }

    componentDidMount() {
        this.setState({loading: true});

        this.props.firebase.users().on('value', snapshot => {
            const usersObject = snapshot.val();

            const usersList = Object.keys(usersObject).map(key => ({
                ...usersObject[key],
                uid: key,
            }));

            this.setState({
                users: usersList,
                loading: false,
            });
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const {users, loading} = this.state;

        return (
            <div>
                <h2>Users</h2>
                {loading && <div>Loading ...</div>}
                <ul className="list-unstyled row">
                    {users.map(user => (
                        <li key={user.uid} className="col-12 col-sm-6 col-lg-4 mb-3 mb-sm-0">

                            <div className="card h-100">
                                <div className="card-header">
                                    <h3 className="text-uppercase m-0 pt-2">{user.username}</h3>
                                </div>
                                <div className="card-body">
                                    <p>
                                        <strong>ID:</strong> {user.uid}
                                    </p>
                                    <p>
                                        <strong>E-Mail:</strong> {user.email}
                                    </p>
                                    <p>
                                        <Link
                                            to={{
                                                pathname: `${ROUTES.ADMINISTRATION}/${user.uid}`,
                                                state: {user},
                                            }}
                                        >
                                            Details
                                        </Link>
                                    </p>

                                </div>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

class UserItemBase extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            user: null,
            ...props.location.state,
        };
    }

    componentDidMount() {
        if (this.state.user) {
            return;
        }

        this.setState({loading: true});

        this.props.firebase
            .user(this.props.match.params.id)
            .on('value', snapshot => {
                this.setState({
                    user: snapshot.val(),
                    loading: false,
                });
            });
    }

    componentWillUnmount() {
        this.props.firebase.user(this.props.match.params.id).off();
    }

    onSendPasswordResetEmail = () => {
        this.props.firebase.doPasswordReset(this.state.user.email);
    };

    render() {
        const {user, loading} = this.state;

        return (
            <div>
                <h2>User ({this.props.match.params.id})</h2>
                {loading && <div>Loading ...</div>}

                {user && (
                    <div>
                        <p>
                            <strong>ID:</strong> {user.uid}
                        </p>
                        <p>
                            <strong>E-Mail:</strong> {user.email}
                        </p>
                        <p>
                            <strong>Username:</strong> {user.username}
                        </p>
                        <p>
                            <button className="btn btn-secondary mr-2" type="button"
                                    onClick={this.onSendPasswordResetEmail}>
                                Send Password Reset
                            </button>
                            <Link
                                to={{
                                    pathname: `${ROUTES.ADMINISTRATION}`,
                                    state: {user},
                                }}
                                className="btn btn-outline-secondary"
                                type="button"
                            >
                                Back
                            </Link>
                        </p>
                    </div>
                )}
            </div>
        );
    }
}

const UserList = withFirebase(UserListBase);
const UserItem = withFirebase(UserItemBase);

const condition = authUser =>
    authUser && !!authUser.roles[ROLES.ADMIN];
export default compose(
    withEmailVerification,
    withAuthorization(condition),
)(AdminPage);