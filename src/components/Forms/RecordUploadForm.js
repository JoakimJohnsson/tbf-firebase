import React, {Component} from 'react';
import firebase from "firebase";

const INITIAL_STATE = {
    recordId: '',
    artistId: '',
    name: '',
    description: '',
    format: '',
    type: '',
    year: '',
    coverUrl: '',
    numberOfViews: 1,
    error: null
};

class UploadRecordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        };
    }

    onSubmit = event => {
        firebase.firestore().collection('records').doc(this.state.recordId).set({
            artistId: this.state.artistId,
            name: this.state.name,
            description: this.state.description,
            format: this.state.format,
            type: this.state.type,
            year: this.state.year,
            coverUrl: this.state.coverUrl,
            numberOfViews: this.state.numberOfViews
        })
            .then(() => {
                firebase.firestore().collection('stats').doc('lastAddedRecord').set({
                    recordId: this.state.recordId,
                    artistId: this.state.artistId,
                    date: firebase.firestore.FieldValue.serverTimestamp()
                })
                    .then(() => {
                        // Increment number of records
                        const increment = firebase.firestore.FieldValue.increment(1);
                        firebase.firestore().collection("stats").doc('counters')
                            .update({recordCounter: increment}).then(function () {
                            console.log("Document successfully updated!");
                        })
                            .catch(function (error) {
                                // The document probably doesn't exist.
                                console.error("Error updating document: ", error);
                            });
                    })
                    .catch(error => {
                        this.setState({error})
                    });
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
            recordId,
            artistId,
            name,
            description,
            format,
            type,
            year,
            coverUrl,
            numberOfViews,
            error,
        } = this.state;
        const isInvalid = recordId === '';
        return (
            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label htmlFor="recordId" className="form-label">Record Id</label>
                    <input
                        name="recordId"
                        id="recordId"
                        value={recordId}
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        name="name"
                        id="name"
                        value={name}
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input
                        name="description"
                        id="description"
                        value={description}
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="format" className="form-label">Format</label>
                    <input
                        name="format"
                        id="format"
                        value={format}
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="type" className="form-label">Type</label>
                    <input
                        name="type"
                        id="type"
                        value={type}
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="year" className="form-label">Year</label>
                    <input
                        name="year"
                        id="year"
                        value={year}
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="artistId" className="form-label">Artist Id</label>
                    <select
                        id="artistId"
                        name="artistId"
                        className="form-control"
                        value={artistId}
                        onChange={this.onChange}>
                        <option value="select">-- Select --</option>
                        <option value="15th-22">15th 22</option>
                        <option value="the-baseball-field">The Baseball field</option>
                        <option value="the-bodonis">The Bodonis</option>
                        <option value="fredrik-svensson">Fredrik Svensson</option>
                        <option value="mc-bomb">MC Bomb</option>
                        <option value="music-ninja">Music / Ninja</option>
                        <option value="olle">Olle</option>
                        <option value="satans-galjonsfigurer">Satans Galjonsfigurer</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="coverUrl" className="form-label">Cover URL</label>
                    <input
                        name="coverUrl"
                        id="coverUrl"
                        value={coverUrl}
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3 d-flex">
                    <div>
                        <label htmlFor="numberOfViews" className="form-label">Number of views</label>
                        <input
                            name="numberOfViews"
                            id="numberOfViews"
                            value={numberOfViews}
                            onChange={this.onChange}
                            type="number"
                            min="1"
                            max="1"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="text-end">
                    <button className="btn btn-secondary mb-3" disabled={isInvalid} type="submit">
                        Submit
                    </button>
                </div>
                {error && error.message}
            </form>
        );
    }
}

export default UploadRecordForm;
