import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from "../../Firebase/context";
import {Alert} from "react-bootstrap";
import * as ROUTES from "../../../constants/routes";

const INITIAL_STATE = {
    name: '',
    firstName: '',
    lastName: '',
    description: '',
    error: null
};

class AddPersonsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE
        };
    }

    onSubmit = event => {
        this.props.firebase.persons().push({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            description: this.state.description
        })
            .then(() => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.DASHBOARD);
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
            firstName,
            lastName,
            description,
            error,
        } = this.state;
        const isInvalid =
            firstName === '' ||
            lastName === '' ||
            description === '';
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="addPersonsFirstName">First name</label>
                    <input
                        name="firstName"
                        id="addPersonsFirstName"
                        value={firstName}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Jane"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="addPersonsLastName">Last name</label>
                    <input
                        name="lastName"
                        id="addPersonsLastName"
                        value={lastName}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Doe"
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="addPersonsDescription">Description</label>
                    <textarea
                        name="description"
                        id="addPersonsDescription"
                        value={description}
                        onChange={this.onChange}
                        rows="3"
                        className="form-control"
                    />
                </div>
                <button className="btn btn-secondary btn-lg d-block mb-4" disabled={isInvalid} type="submit">
                    Add
                </button>
                {error && <Alert variant="danger"><span>{error.message}</span></Alert>}
            </form>
        );
    }
}

const PersonsForm = compose(
    withRouter,
    withFirebase,
)(AddPersonsForm);

export default PersonsForm;
