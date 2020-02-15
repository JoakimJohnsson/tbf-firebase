import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from "../Firebase/context";
import * as ROUTES from '../../constants/routes';
import {Alert} from "react-bootstrap";

const SignUpPage = () => (
    <div>
        <h1>Sign up to stream music - completely free</h1>
        <p className="lead">
            Listen to free music. All music - one app.
        </p>
        <p>
           Do you like lo-fi music that's not available anywhere else? We sure do.
        </p>
        <div className="standard-box-wrapper__near-dark">
            <h2>Sign up here</h2>
        <SignUpForm/>
    </div>
    </div>
);
const INITIAL_STATE = {
    userName: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {username, email, passwordOne} = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                // Create user in Firebase db
                return this.props.firebase
                    .user(authUser.user.uid)
                    .set({
                        username,
                        email,
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

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;
        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';
        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="form-group col-12 col-sm-6 col-lg-3">
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
                            enhance your experience while using this app. We are fully compliant with GDPR.</small>
                    </div>
                    <div className="form-group col-12 col-sm-6 col-lg-3">
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
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group col-12 col-sm-6 col-lg-3">
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
                        <small id="passwordHelp" className="form-text text-muted">Please choose password wisely.</small>
                    </div>
                    <div className="form-group col-12 col-sm-6 col-lg-3">
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
                </div>
                <button className="btn btn-secondary btn-lg d-block mb-4" disabled={isInvalid} type="submit">
                    Sign me up!
                </button>
                {error && <Alert variant="danger"><span>{error.message}</span></Alert>}
            </form>
        );
    }
}

const SignUpLink = () => (
    <div className="mb-4">
        <h2>Dont have an account?</h2>
        <p>Sign up for free.</p>
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
