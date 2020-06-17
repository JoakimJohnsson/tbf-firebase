import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {DashboardListItemButton, LoadingComponent} from "../../MicroComponents";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import AddSongsForm from "../forms/addSongsForm";

class SongsBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            songs: [],
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.songs().on('value', snapshot => {
            const songObject = snapshot.val();
            if (songObject) {
                const songList = Object.keys(songObject).map(key => ({
                    ...songObject[key],
                    uid: key,
                }));
                this.setState({
                    songs: songList,
                    loading: false
                });
            } else {
                this.setState({ songs: null, loading: false });
            }
        });
    }
    componentWillUnmount() {
        this.props.firebase.songs().off();
    }
    onRemoveSong = uid => {
        this.props.firebase.song(uid).remove();
    };
    render() {
        const { songs, loading } = this.state;
        return (
            <div>
                {loading && <LoadingComponent />}
                {songs ? (
                    <SongsListUl
                        list={songs}
                        onRemove={this.onRemoveSong}
                    />
                ) : (
                    <div>There are no songs ...</div>
                )}
            </div>
        );
    }
}

const SongsDashboardCard = () => (
    <div className="col-12 col-xl-6 mb-3">
        <div className="card h-100 dashboard-card">
            <div className="card-header">
                <h3 className="text-uppercase m-0 pt-2">Songs</h3>
                <SongsDashboardModal />
            </div>
            <div className="card-body">
                <Songs />
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

const SongsDashboardModal = () => (
    <>
        <div className="modal fade" id="modal-040-songs" tabIndex="-1" role="dialog"
             aria-labelledby="modal-label-040-songs"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="modal-label-040-songs">Add Song</h5>
                        <button type="button" className="btn btn-fa__secondary" data-dismiss="modal" aria-label="Close">
                            <FontAwesomeIcon icon="times"/>
                        </button>
                    </div>
                    <div className="modal-body">
                        <AddSongsForm />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <button className="btn btn-secondary btn-card-header" data-toggle="modal" aria-label="Add Song"
                data-target="#modal-040-songs">
            <FontAwesomeIcon icon="plus"/>
        </button>
    </>
);

const SongsListUl = ({ list, onRemove }) => (
    <ul className="dashboard-list list-group list-group-flush">
        {list.map(item => (
            <SongsListLi
                key={item.uid}
                listItem={item}
                onRemove={onRemove}
            />
        ))}
    </ul>
);

const SongsListLi = ({ listItem, onRemove }) => (
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

const Songs = withFirebase(SongsBase);

export default SongsDashboardCard;