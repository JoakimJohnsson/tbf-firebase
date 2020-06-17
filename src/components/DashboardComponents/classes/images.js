import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {DashboardListItemButton, LoadingComponent} from "../../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddImagesForm from "../forms/addImagesForm";

class ImagesBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            images: [],
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.images().on('value', snapshot => {
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
                this.setState({ images: null, loading: false });
            }
        });
    }
    componentWillUnmount() {
        this.props.firebase.images().off();
    }
    onRemoveImage = uid => {
        this.props.firebase.image(uid).remove();
    };
    render() {
        const { images, loading } = this.state;
        return (
            <div>
                {loading && <LoadingComponent />}
                {images ? (
                    <ImagesListUl
                        list={images}
                        onRemove={this.onRemoveImage}
                    />
                ) : (
                    <div>There are no images ...</div>
                )}
            </div>
        );
    }
}

const ImagesDashboardCard = () => (
    <div className="col-12 col-xl-6 mb-3">
        <div className="card h-100 dashboard-card">
            <div className="card-header">
                <h3 className="text-uppercase m-0 pt-2">Images</h3>
                <ImagesDashboardModal />
            </div>
            <div className="card-body">
                <Images />
            </div>
            <div className="card-footer align-items-center">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                            <a className="page-link" href="#/" tabIndex="-1" aria-label="Previous">
                                <FontAwesomeIcon icon="chevron-left"/>
                            </a>
                        </li>
                        <li className="page-item active"><a className="page-link" href="#/">1</a></li>
                        <li className="page-item"><a className="page-link" href="#/">2</a></li>
                        <li className="page-item"><a className="page-link" href="#/">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#/" aria-label="Next">
                                <FontAwesomeIcon icon="chevron-right"/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
);

const ImagesDashboardModal = () => (
    <>
        <div className="modal fade" id="modal-030-images" tabIndex="-1" role="dialog"
             aria-labelledby="modal-label-030-images"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-label-030-images">Add Image</h5>
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
        <button className="btn btn-secondary btn-card-header" data-toggle="modal" aria-label="Add Image"
                data-target="#modal-030-images">
            <FontAwesomeIcon icon="plus"/>
        </button>
    </>
);

const ImagesListUl = ({ list, onRemove }) => (
    <ul className="dashboard-list list-group list-group-flush">
        {list.map(item => (
            <ImagesListLi
                key={item.uid}
                listItem={item}
                onRemove={onRemove}
            />
        ))}
    </ul>
);

const ImagesListLi = ({ listItem, onRemove }) => (
    <li className="list-group-item">
        <div>{listItem.name}</div>
        <div>
            <span className="mr-2">
            <DashboardListItemButton
                onClick={onRemove}
                listItem={listItem}
                icon={"times"}
                action={"Delete"}
            />
            </span>
            <span>
            <DashboardListItemButton
                onClick={onRemove}
                listItem={listItem}
                icon={"pen"}
                action={"Edit"}
            />
            </span>
        </div>
    </li>
);

const Images = withFirebase(ImagesBase);

export default ImagesDashboardCard;