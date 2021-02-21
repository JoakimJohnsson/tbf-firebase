import React, {Component} from 'react';
import firebase from "firebase";

const INITIAL_STATE = {
    recordId: '',
    error: null
};

class LastAddedRecordForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...INITIAL_STATE
        };
    }

    onSubmit = event => {
        firebase.firestore().collection('stats').doc('lastAddedRecord').set({
            recordId: this.state.recordId,
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
            recordId,
            error,
        } = this.state;

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

                <div className="text-end">
                    <button className="btn btn__neu btn-primary mb-3" type="submit">
                        Submit
                    </button>
                </div>
                {error && error.message}
            </form>
        );
    }
}

export default LastAddedRecordForm;
