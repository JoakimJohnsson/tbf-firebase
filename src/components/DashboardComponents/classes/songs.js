import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {LoadingComponent} from "../../MicroComponents";
import {DashboardListUl} from "../../DashboardComponents";

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
                    <DashboardListUl
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

const Songs = withFirebase(SongsBase);

export default Songs;