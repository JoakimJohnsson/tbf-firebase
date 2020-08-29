import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {DashboardListItemButton, LoadingComponent} from "../../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddImagesForm from "../forms/addImagesForm";
import Confirmation from "../../Confirmation";

class ImagesBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            images: [],
            limit: 2,
        };
    }
    componentDidMount() {
        this.onListenForImages()
    }
    onListenForImages() {
        this.setState({loading: true});
        this.props.firebase
            .images()
            .orderByChild('name')
            .limitToLast(this.state.limit)
            .on('value', snapshot => {
                const imageObject = snapshot.val();
                if (imageObject) {
                    const imageList = Object.keys(imageObject).map(key => ({
                        ...imageObject[key],
                        uid: key,
                    }));
                    this.setState({
                        images: imageList,
                        loading: false
                    });
                } else {
                    this.setState({images: null, loading: false});
                }
            });
    }
    componentWillUnmount() {
        this.props.firebase.images().off();
    }
    onRemoveArtist = uid => {
        this.props.firebase.image(uid).remove();
    };
    onNextPage = () => {
        this.setState(
            state => ({ limit: state.limit + 2 }),
            this.onListenForImages,
        );
    };
    onEditImageName = (image, name) => {
        const { uid, ...imageSnapshot } = image;

        this.props.firebase.image(image.uid).set({
            ...imageSnapshot,
            name,
            editedAt: this.props.firebase.serverValue.TIMESTAMP,
        });
    };

    render() {
        const { images, loading } = this.state;
        return (
            <div>
                {loading && <LoadingComponent />}
                {images ? (
                    <ImagesListUl
                        imagesList={images}
                        onEditImageName={this.onEditImageName}
                        onRemoveImage={this.onRemoveImage}
                    />
                ) : (
                    <div>There are no images ...</div>
                )}
                {!loading && images && (
                    <button className="btn btn-fa__tertiary m-3 d-inline-block w-100" aria-label="Load more images" type="button" onClick={this.onNextPage}>
                        <FontAwesomeIcon icon="angle-double-down"/>
                    </button>
                )}
            </div>
        );
    }
}

const ImagesDashboardCard = () => (
    <div className="col-12 col-lg-6 mb-3">
        <div className="card h-100 card__dark">
            <div className="card-header">
                <h3 className="m-0 pt-2">Images</h3>
                <ImagesDashboardModal />
            </div>
            <div className="card-body">
                <Images />
            </div>
        </div>
    </div>
);

const ImagesDashboardModal = () => (
    <>
        <div className="modal fade" id="modal-020-images" tabIndex="-1" role="dialog"
             aria-labelledby="modal-label-020-images"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-label-020-images">Add Image</h5>
                        <button type="button" className="btn btn-fa__secondary" data-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon="times"/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <AddImagesForm />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn__tertiary" data-toggle="modal" aria-label="Add Image"
                data-target="#modal-020-images">
            <FontAwesomeIcon icon="plus"/>
        </button>
    </>
);

const ImagesListUl = ({ imagesList, onEditImageName, onRemoveImage }) => (
    <ul className="dashboard-list list-group list-group-flush">
        {imagesList.map(image => (
            <ImagesListLi
                key={image.uid}
                image={image}
                onEditImageName={onEditImageName}
                onRemoveImage={onRemoveImage}
            />
        ))}
    </ul>
);

class ImagesListLi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            editImageName: this.props.image.name,
        };
    }

    onToggleEditMode = () => {
        this.setState(state => ({
            editMode: !state.editMode,
            editImageName: this.props.image.name,
        }));
    };

    onChangeEditImageName = event => {
        this.setState({ editImageName: event.target.value });
    };

    onSaveEditImageName = () => {
        this.props.onEditImageName(this.props.image, this.state.editImageName);

        this.setState({ editMode: false });
    };

    render() {
        const { image, onRemoveImage } = this.props;
        const { editMode, editImageName } = this.state;

        return (
            <li className="list-group-item flex-me">

                {editMode ? (
                    <input
                        className="form-control w-75"
                        type="text"
                        value={editImageName}
                        onChange={this.onChangeEditImageName}
                    />
                ) : (
                    <div><span className="font-weight-bold">{image.name.toUpperCase()}</span> {image.editedAt && <span>(Edited)</span>}</div>
                )}

                <div>
                    {!editMode && (
                        <span className="mr-2">
                            <Confirmation
                                onConfirm={() => {
                                    onRemoveImage(image.uid)
                                }}
                                body="Are you sure you want to delete this?"
                                confirmText="Confirm delete"
                                title="Delete image">
                                <button
                                    type={"button"}
                                    aria-label={"Delete image"}
                                    className={"btn btn-fa__primary"}>
                                    <FontAwesomeIcon icon={"times"} />
                                </button>
                            </Confirmation>
                        </span>
                    )}
                    {editMode ? (
                        <div>
                            <span className="mr-2">
                            <DashboardListItemButton
                            onClick={this.onSaveEditImageName}
                            listItem={image}
                            icon={"save"}
                            action={"Save"}
                            />
                            </span>
                            <DashboardListItemButton
                            onClick={this.onToggleEditMode}
                            listItem={image}
                            icon={"pen"}
                            action={"Edit"}
                            />
                        </div>

                        ) : (
                    <span>
                        <DashboardListItemButton
                            onClick={this.onToggleEditMode}
                            listItem={image}
                            icon={"pen"}
                            action={"Edit"}
                        />
                    </span>
                        )}
                </div>
            </li>
        );
    }
}

const Images = withFirebase(ImagesBase);

export default ImagesDashboardCard;