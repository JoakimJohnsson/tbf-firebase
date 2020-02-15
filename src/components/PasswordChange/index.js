import React, {Component} from 'react';
import {withFirebase} from "../Firebase";

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const {passwordOne} = this.state;
        this.props.firebase
            .doPasswordUpdate(passwordOne)
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
        const {passwordOne, passwordTwo, error} = this.state;
        const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

        return (
            <form onSubmit={this.onSubmit}>
                <div className="row">
                    <div className="form-group col-12 col-md-6">
                        <label htmlFor="changePasswordPasswordOne">Enter new password</label>
                        <input
                            id="changePasswordPasswordOne"
                            name="passwordOne"
                            value={passwordOne}
                            onChange={this.onChange}
                            type="password"
                            placeholder="blamemoe666"
                            className="form-control"
                        />
                        <label htmlFor="changePasswordPasswordTwo">Confirm new password</label>
                        <input
                            id="changePasswordPasswordTwo"
                            name="passwordTwo"
                            value={passwordTwo}
                            onChange={this.onChange}
                            type="password"
                            placeholder="blamemoe666"
                            className="form-control"
                        />
                    </div>
                </div>
                <button className="btn btn-secondary" disabled={isInvalid} type="submit">
                    Change my password
                </button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(PasswordChangeForm);
