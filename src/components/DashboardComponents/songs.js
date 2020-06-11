import React, {Component} from "react";
import {withFirebase} from "../Firebase";

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
    render() {
        const { songs, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}
                {songs ? (
                    <SongList songs={songs} />
                ) : (
                    <div>There are no songs ...</div>
                )}
            </div>
        );
    }
}
const SongList = ({ songs }) => (
    <ul className="list-group list-group-flush">
        {songs.map(song => (
            <SongItem key={song.uid} song={song}/>
        ))}
    </ul>
);
const SongItem = ({ song }) => (
    <li className="list-group-item">
        {song.name}
    </li>
);

const Songs = withFirebase(SongsBase);

export default Songs;