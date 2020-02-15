import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withFirebase} from "../Firebase";
import * as ROUTES from '../../constants/routes';
import {Alert} from "react-bootstrap";


const PasswordForgetPage = () => (
    <div>
        <h1>Did You forget your password?</h1>
        <p>Nevermind, we're here to help. Enter your email here, and we'll send You a new one.</p>
        <PasswordForgetForm/>
    </div>
);

const INITIAL_STATE = {
    email: '',
    error: null
};

class PasswordForgetFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email} = this.state;
        this.props.firebase
            .doPasswordReset(email)
            .then(() => {
                this.setState({...INITIAL_STATE});
            })
            .catch(error => {
                this.setState({error});
            });
        event.preventDefault();
    };

    onChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {email, error} = this.state;
        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="passwordForgetEmail">Email</label>
                        <input
                            id="passwordForgetEmail"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            type="text"
                            placeholder="jane@doe.com"
                            className="form-control"
                        />
                    </div>
                </div>
                <button className="btn btn-secondary d-block mb-4" disabled={isInvalid} type="submit">
                    Send help!
                </button>
                {error && <Alert variant="danger"><p>{error.message}</p></Alert>}
            </form>
        );
    }
}

const PasswordForgetLink = () => (
    <div>
        <h3>Forgot password?</h3>
        <p>We're here to help. </p>
        <Link to={ROUTES.PASSWORD_FORGET}>
            <button className="btn btn-secondary btn-lg mb-4" type="button">
                Please help me!
            </button>
        </Link>
    </div>
);

export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export {PasswordForgetForm, PasswordForgetLink};
