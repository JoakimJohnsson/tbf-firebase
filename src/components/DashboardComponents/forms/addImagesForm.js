import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from "../../Firebase/context";
import {Alert} from "react-bootstrap";
import * as ROUTES from "../../../constants/routes";

const INITIAL_STATE = {
    name: '',
    error: null
};

class AddImagesForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE
        };
    }

    onSubmit = event => {
        this.props.firebase.images().push({
            name: this.state.name
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
            name,
            error,
        } = this.state;
        const isInvalid =
            name === '';
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="addImagesName">Name</label>
                    <input
                        name="name"
                        id="addImagesName"
                        value={name}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Image name"
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

const ImagesForm = compose(
    withRouter,
    withFirebase,
)(AddImagesForm);

export default ImagesForm;
