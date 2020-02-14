import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
// import {SignUpLink} from '../SignUp';
import {Alert} from 'react-bootstrap';
// import {PasswordForgetLink} from '../PasswordForget';
import {withFirebase} from "../Firebase";
import * as ROUTES from '../../constants/routes';

// const SignInPage = () => (
//     <div>
//         <h1>Sign in</h1>
//         <SignInForm/>
//         <div className="row">
//             <div className="col-12 col-md-6">
//                 <PasswordForgetLink/>
//             </div>
//             <div className="col-12 col-md-6">
//                 <SignUpLink/>
//             </div>
//         </div>
//     </div>
// );

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
};

class SignInFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {email, password} = this.state;
        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.ADMIN);
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
        const {email, password, error} = this.state;
        const isInvalid = password === '' || email === '';
        return (
            <form className="mb-3" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="signInEmail">Email address</label>
                    <input
                        name="email"
                        id="signInEmail"
                        value={email}
                        onChange={this.onChange}
                        type="text"
                        placeholder="jane@doe.com"
                        className="form-control"
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="signInPassword">Password</label>
                    <input
                        name="password"
                        id="signInPassword"
                        value={password}
                        onChange={this.onChange}
                        type="password"
                        placeholder="janedoe666"
                        className="form-control"
                    />

                </div>
                <button className="btn btn-secondary d-block mb-4" disabled={isInvalid} type="submit">
                    Sign In
                </button>
                {error && <Alert variant="danger"><p>{error.message}</p></Alert>}
            </form>
        );
    }
}

const SignInForm = compose(
    withRouter,
    withFirebase,
)(SignInFormBase);

// export default SignInPage;
export {SignInForm};
