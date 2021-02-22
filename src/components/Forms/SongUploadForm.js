import React, {Component} from 'react';
import firebase from "firebase";

const INITIAL_STATE = {
    songId: '',
    artistId: '',
    recordId: '',
    name: '',
    url: '',
    index: 1,
    numberOfPlays: 1,
    error: null
};

class UploadSongForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        };
    }

    onSubmit = event => {
        firebase.firestore().collection('songs').doc(this.state.songId).set({
            artistId: this.state.artistId,
            recordId: this.state.recordId,
            name: this.state.name,
            url: this.state.url,
            index: this.state.index,
            numberOfPlays: this.state.numberOfPlays
        })
            .then(() => {
                firebase.firestore().collection('records').doc(this.state.recordId).collection('songs').doc(this.state.songId).set({
                    index: this.state.index,
                    song: `songs/${this.state.songId},`
                })
                    .then(() => {

                        // Increment number of songs
                        const increment = firebase.firestore.FieldValue.increment(1);
                        firebase.firestore().collection("stats").doc('counters')
                            .update({songCounter: increment}).then(function () {
                            console.log("Document successfully updated!");
                        })
                            .catch(function (error) {
                                // The document probably doesn't exist.
                                console.error("Error updating document: ", error);
                            });

                        this.setState({index: this.state.index + 1});
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
            songId,
            artistId,
            recordId,
            name,
            url,
            index,
            numberOfPlays,
            error,
        } = this.state;
        const isInvalid = songId === '' || recordId === '' || url === '';
        return (
            <form onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label htmlFor="songId" className="form-label">Song Id</label>
                    <input
                        name="songId"
                        id="songId"
                        value={songId}
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
                    <label htmlFor="artistId" className="form-label">Artist Id</label>
                    <select
                        id="artistId"
                        name="artistId"
                        className="form-control"
                        value={artistId}
                        onChange={this.onChange}>
                        <option value="select">-- Select --</option>
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
                    <label htmlFor="url" className="form-label">URL</label>
                    <input
                        name="url"
                        id="url"
                        value={url}
                        onChange={this.onChange}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div className="mb-3 d-flex">
                    <div className="mr-3">
                        <label htmlFor="index" className="form-label">Index</label>
                        <input
                            name="index"
                            id="index"
                            value={index}
                            onChange={this.onChange}
                            type="number"
                            min="1"
                            max="35"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label htmlFor="numberOfPlays" className="form-label">Number of plays</label>
                        <input
                            name="numberOfPlays"
                            id="numberOfPlays"
                            value={numberOfPlays}
                            onChange={this.onChange}
                            type="number"
                            min="1"
                            max="1"
                            className="form-control"
                        />
                    </div>
                </div>

                <div className="text-end">
                    <button className="btn btn__neu btn-primary mb-3" disabled={isInvalid} type="submit">
                        Submit
                    </button>
                </div>
                {error && error.message}
            </form>
        );
    }
}

export default UploadSongForm;
