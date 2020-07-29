import React, { Component } from "react";
import {withFirebase} from "../../../components/Firebase/context";
import {compose} from "recompose";
import {withRouter} from "react-router-dom";

const INITIAL_STATE = {
    image: null,
    url: '',
    progress: 0,
    error: null
};

class ImageUploadForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE
        };
    }

    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    };

    handleUpload = () => {
        const { image } = this.state;
        const uploadTask = this.props.firebase.storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                // progress function ...
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress });
            },
            error => {
                // Error function ...
                console.log(error);
            },
            () => {
                // complete function ...
                this.props.firebase.storage
                    .ref("images")
                    .child(image.name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({ url });
                    });
            }
        );
    };
    render() {
        return (
            <div className="">
                <h2 className="">Add image</h2>
                <div className="progress mb-3">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:this.state.progress + '%'}} aria-valuenow={this.state.progress}
                         aria-valuemin="0" aria-valuemax="100">
                    </div>
                </div>

                <div className="">
                    <div className="">
                        <span>File</span>
                        <input type="file" onChange={this.handleChange} />
                    </div>
                    <div className="">
                        <input className="" type="text" />
                    </div>
                </div>
                <button
                    onClick={this.handleUpload}
                    className="btn btn-secondary btn-lg d-block mb-4"
                >
                    Upload
                </button>
                <br />
                <br />
                <img
                    src={this.state.url || "https://via.placeholder.com/400x300"}
                    alt="Uploaded Images"
                    height="300"
                    width="400"
                />
            </div>
        );
    }
}

const ImageUpload = compose(
    withRouter,
    withFirebase,
)(ImageUploadForm);

export default ImageUpload;