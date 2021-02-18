import React, {Component} from 'react';
import firebase from "firebase";

const INITIAL_STATE = {
    songId: '',
    artistId: '',
    recordId: '',
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
            index: this.state.index,
            numberOfPlays: this.state.numberOfPlays
        })
            .then(() => {
               this.setState({index: this.state.index +1});
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
            index,
            numberOfPlays,
            error,
        } = this.state;
        const isInvalid = songId === '';
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
                    <label htmlFor="artistId" className="form-label">Artist Id</label>
                    <select
                        id="artistId"
                        name="artistId"
                        className="form-control"
                        value={artistId}
                        onChange={this.onChange}>
                        <option value="zzz">zzz</option>
                        <option value="the-baseball-field">The Baseball field</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="recordId" className="form-label">Record Id</label>
                    <select
                        id="recordId"
                        name="recordId"
                        className="form-control"
                        value={recordId}
                        onChange={this.onChange}>
                        <option value="zzz">zzz</option>
                        <option value="record-lp">Record lp</option>
                    </select>
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
