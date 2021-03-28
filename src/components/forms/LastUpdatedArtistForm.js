import React, {Component} from 'react';
import firebase from "firebase";
import UploadArtistSelect from "../microComponents/UploadArtistSelect";

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
                    <UploadArtistSelect artistId={artistId} onChange={this.onChange}/>
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
