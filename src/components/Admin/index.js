import React, {Component} from 'react';
import {withFirebase} from '../Firebase';
import {SignUpLink} from "../SignUp";
import {SignInForm} from "../SignIn";
import {PasswordForgetLink} from "../PasswordForget";

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

            console.log("userlist: " + usersList)

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
            // <div className="row">
            //     <div className="col-12">
            //         <h1>Hello Admin</h1>
            //         <p className="lead">Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text
            //             about the app. Very Nice
            //             text. Bacon ipsim and so forth.</p>
            //         <p>Some text about the app. Very Nice text. Bacon ipsim and so forth. Some text about the app. Very
            //             Nice
            //             text. Bacon ipsim and so forth.</p>
            //         {loading && <div>Loading ...</div>}
            //         <UserList users={users}/>
            //     </div>
            // </div>
            <div className="row">
                <div className="standard-main-column">
                    <h1>The Baseball Field & Friends</h1>
                    <p className="lead">Do You miss all those fine lo-fi tunes of the 90's and early 2000's? Now you'll
                        have the opportunity to stream all the music from such labels as - Vanishing Vanity Music,
                        [U][R][U] and
                        Strandad Sjöbuse Records for free.</p>
                    <p className="standard-box-wrapper__near-dark text-yellow">STATUS 2020-02-15: In development, all
                        accounts
                        will be deleted.</p>
                    <SignUpLink/>
                </div>
                <div className="standard-secondary-column">
                    <div className="mb-5 standard-box-wrapper__near-dark">
                        <h2>Sign in</h2>
                        <SignInForm/>
                        <PasswordForgetLink/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>


        )
    }
}

const UserList = ({users}) => (
    <ul>
        {users.map(user => (
            <li key={user.uid}>
                <p>
                    <strong>ID:</strong> {user.uid}
                </p>
                <p>
                    <strong>E-Mail:</strong> {user.email}
                </p>
                <p>
                    <strong>Username:</strong> {user.username}
                </p>
            </li>
        ))}
    </ul>
);

export default withFirebase(AdminPage);
