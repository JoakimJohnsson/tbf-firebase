import React, {Component} from 'react';
import firebase from "firebase";

const INITIAL_STATE = {
    artistId: '',
    error: null
};

class LastUpdatedArtistForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        };
    }

    onSubmit = event => {
        firebase.firestore().collection('stats').doc('lastUpdatedArtist').set({
            artistId: this.state.artistId,
            date: firebase.firestore.FieldValue.serverTimestamp()
        })
            .then(() => {
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
            artistId,
            error,
        } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
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
                <div className="text-end">
                    <button className="btn btn-secondary mb-3" type="submit">
                        Submit
                    </button>
                </div>
                {error && error.message}
            </form>
        );
    }
}

export default LastUpdatedArtistForm;
