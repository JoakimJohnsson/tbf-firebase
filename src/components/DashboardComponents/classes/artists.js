import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {DashboardListItemButton, LoadingComponent} from "../../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddArtistsForm from "../forms/addArtistsForm";

class ArtistsBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            artists: [],
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.artists().on('value', snapshot => {
            const artistObject = snapshot.val();
            if (artistObject) {
                const artistList = Object.keys(artistObject).map(key => ({
                    ...artistObject[key],
                    uid: key,
                }));
                this.setState({
                    artists: artistList,
                    loading: false
                });
            } else {
                this.setState({ artists: null, loading: false });
            }
        });
    }
    componentWillUnmount() {
        this.props.firebase.artists().off();
    }
    onRemoveArtist = uid => {
        this.props.firebase.artist(uid).remove();
    };

    // onEditMessage
    onEditArtistName = (artist, name) => {
        const { uid, ...artistSnapshot } = artist;

        this.props.firebase.artist(artist.uid).set({
            ...artistSnapshot,
            name,
            editedAt: this.props.firebase.serverValue.TIMESTAMP,
        });
    };

    render() {
        const { artists, loading } = this.state;
        return (
            <div>
                {loading && <LoadingComponent />}
                {artists ? (
                    <ArtistsListUl
                        artistsList={artists}
                        // onEditMessage={this.onEditMessage}
                        onEditArtistName={this.onEditArtistName}
                        onRemoveArtist={this.onRemoveArtist}
                    />
                ) : (
                    <div>There are no artists ...</div>
                )}
            </div>
        );
    }
}

const ArtistsDashboardCard = () => (
    <div className="col-12 col-lg-6 mb-3">
        <div className="card h-100 card__dark">
            <div className="card-header">
                <h3 className="text-uppercase m-0 pt-2">Artists</h3>
                <ArtistsDashboardModal />
            </div>
            <div className="card-body">
                <Artists />
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

const ArtistsDashboardModal = () => (
    <>
        <div className="modal fade" id="modal-020-artists" tabIndex="-1" role="dialog"
             aria-labelledby="modal-label-020-artists"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-label-020-artists">Add Artist</h5>
                        <button type="button" className="btn btn-fa__secondary" data-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon="times"/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <AddArtistsForm />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-secondary btn-card-header" data-toggle="modal" aria-label="Add Artist"
                data-target="#modal-020-artists">
            <FontAwesomeIcon icon="plus"/>
        </button>
    </>
);

const ArtistsListUl = ({ artistsList, onEditArtistName, onRemoveArtist }) => (
    <ul className="dashboard-list list-group list-group-flush">
        {artistsList.map(artist => (
            <ArtistsListLi
                key={artist.uid}
                artist={artist}
                onEditArtistName={onEditArtistName}
                onRemoveArtist={onRemoveArtist}
            />
        ))}
    </ul>
);

class ArtistsListLi extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: false,
            editArtistName: this.props.artist.name,
        };
    }

    onToggleEditMode = () => {
        this.setState(state => ({
            editMode: !state.editMode,
            editArtistName: this.props.artist.name,
        }));
    };

    onChangeEditArtistName = event => {
        this.setState({ editArtistName: event.target.value });
    };

    onSaveEditArtistName = () => {
        this.props.onEditArtistName(this.props.artist, this.state.editArtistName);

        this.setState({ editMode: false });
    };

    render() {
        const { artist, onRemoveArtist } = this.props;
        const { editMode, editArtistName } = this.state;

        return (
            <li className="list-group-item">

                {editMode ? (
                    <input
                        class="form-control w-75"
                        type="text"
                        value={editArtistName}
                        onChange={this.onChangeEditArtistName}
                    />
                ) : (
                    <div><span className="font-weight-bold">{artist.name.toUpperCase()}</span> {artist.editedAt && <span>(Edited)</span>}</div>
                )}

                <div>
                    {!editMode && (
                        <span className="mr-2">
                            <DashboardListItemButton
                                onClick={onRemoveArtist}
                                listItem={artist}
                                icon={"times"}
                                action={"Delete"}
                            />
                        </span>
                    )}
                    {editMode ? (
                        <div>
                            <span className="mr-2">
                            <DashboardListItemButton
                            onClick={this.onSaveEditArtistName}
                            listItem={artist}
                            icon={"save"}
                            action={"Save"}
                            />
                            </span>
                            <DashboardListItemButton
                            onClick={this.onToggleEditMode}
                            listItem={artist}
                            icon={"pen"}
                            action={"Edit"}
                            />
                        </div>

                        ) : (
                    <span>
                        <DashboardListItemButton
                            onClick={this.onToggleEditMode}
                            listItem={artist}
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

const Artists = withFirebase(ArtistsBase);

export default ArtistsDashboardCard;