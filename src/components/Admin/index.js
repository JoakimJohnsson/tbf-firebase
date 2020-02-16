import React, {Component} from 'react';
import {withFirebase} from '../Firebase';
import TodoComponent from "../microComponents";

class AdminPage extends Component {
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
            console.log("userlist: " + usersList)
        });
    }

    componentWillUnmount() {
        this.props.firebase.users().off();
    }

    render() {
        const {users, loading} = this.state;
        return (
            <div className="row">
                <div className="standard-main-column">
                    <h1>Administration</h1>
                    <TodoComponent todo="Upload artists, records, songs"/>
                    <TodoComponent todo="Roles"/>
                </div>
                <div className="standard-secondary-column">
                    <div className="mb-5 standard-box-wrapper__near-dark">
                        <h2>Users</h2>
                        {loading && <div>Loading ...</div>}
                        <UserList users={users}/>
                    </div>
                </div>
            </div>
        )
    }
}

const UserList = ({users}) => (
    <ul className="list-unstyled">
        {users.map(user => (
            <li key={user.uid}>
                <p><strong>ID:</strong> {user.uid}</p>
                <p><strong>E-Mail:</strong> {user.email}</p>
                <p><strong>Username:</strong> {user.username}</p>
            </li>
        ))}
    </ul>
);

export default withFirebase(AdminPage);
