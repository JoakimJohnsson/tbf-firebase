import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from "../Firebase/context";
import * as ROUTES from '../../constants/routes';
import {Alert} from "react-bootstrap";
import * as ROLES from '../../constants/roles';

const SignUpPage = () => (
    <div className="row">
        <div className="standard-main-column">
            <h1>Lo-fi 4 Life</h1>
            <p>
                This app is completely free to use.
            </p>
            <p>
                User information will only be used to enhance your user experience, and will never be forwarded to a
                third party.
            </p>
        </div>
        <div className="standard-secondary-column">
            <div className="standard-box-wrapper__near-dark">
                <h2>Sign up here</h2>
                <SignUpForm/>
            </div>
        </div>

    </div>
);
const INITIAL_STATE = {
    userName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    isAdmin: false,
    error: null
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { username, email, passwordOne, isAdmin } = this.state;
        const roles = {};
        if (isAdmin) {
            roles[ROLES.ADMIN] = ROLES.ADMIN;
        }
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create user in Firebase db
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
                        roles
                    });
            })
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({error})
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };
    onChangeCheckbox = event => {
        this.setState({ [event.target.name]: event.target.checked });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            isAdmin,
            error,
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <form onSubmit={this.onSubmit}>

                <div className="form-group">
                    <label htmlFor="signUpUsername">User name</label>
                    <input
                        name="username"
                        id="signUpUsername"
                        value={username}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Jane Doe"
                        className="form-control"
                    />
                    <small id="usernameHelp" className="form-text text-muted">We will only use this information to
                        enhance your user experience.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="signUpEmail">Email</label>
                    <input
                        name="email"
                        id="signUpEmail"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="jane@doe.com"
                        className="form-control"
                    />
                    <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone
                        else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordOne">Password</label>
                    <input
                        name="passwordOne"
                        id="signUpPasswordOne"
                        value={passwordOne}
                        onChange={this.onChange}
                        type="password"
                        placeholder="janedoe666"
                        className="form-control"
                    />
                    <small id="passwordHelp" className="form-text text-muted">Please choose your password wisely.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordTwo">Confirm password</label>
                    <input
                        name="passwordTwo"
                        id="signUpPasswordTwo"
                        value={passwordTwo}
                        onChange={this.onChange}
                        type="password"
                        placeholder="janedoe666"
                        className="form-control"
                    />
                </div>
                <label>
                    Admin:
                    <input
                        name="isAdmin"
                        type="checkbox"
                        checked={isAdmin}
                        onChange={this.onChangeCheckbox}
                    />
                </label>
                <button className="btn btn-secondary btn-lg d-block mb-4" disabled={isInvalid} type="submit">
                    Sign me up!
                </button>
                {error && <Alert variant="danger"><span>{error.message}</span></Alert>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <div>
        <h2>Dont have an account?</h2>
        <p>Signing up is completely free.</p>
        <p>Your information will only be used to enhance Your user experience</p>
        <Link to={ROUTES.SIGN_UP}>
            <button className="btn btn-secondary btn-lg" type="button">
                Sign me up!
            </button>
        </Link>
    </div>
);

const SignUpForm = compose(
    withRouter,
    withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export {SignUpForm, SignUpLink};
