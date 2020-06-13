import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {compose} from 'recompose';
import {withFirebase} from "../../Firebase/context";
import {Alert} from "react-bootstrap";

const INITIAL_STATE = {
    name: '',
    error: null
};

class AddArtistsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE
        };
    }

    onSubmit = event => {
        this.props.firebase.artists().push({
            name: this.state.name
        });

        this.setState({...INITIAL_STATE})
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
                    <label htmlFor="addArtistsName">Name</label>
                    <input
                        name="name"
                        id="addArtistsName"
                        value={name}
                        onChange={this.onChange}
                        type="text"
                        placeholder="Music / Ninja"
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

const ArtistsForm = compose(
    withRouter,
    withFirebase,
)(AddArtistsForm);

export default ArtistsForm;
