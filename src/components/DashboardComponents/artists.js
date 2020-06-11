import React, {Component} from "react";
import {withFirebase} from "../Firebase";

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
    render() {
        const { artists, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}
                {artists ? (
                    <ArtistList artists={artists} />
                ) : (
                    <div>There are no artists ...</div>
                )}
            </div>
        );
    }
}
const ArtistList = ({ artists }) => (
    <ul className="list-group list-group-flush">
        {artists.map(artist => (
            <ArtistItem key={artist.uid} artist={artist}/>
        ))}
    </ul>
);
const ArtistItem = ({ artist }) => (
    <li className="list-group-item">
       {artist.name}
    </li>
);

const Artists = withFirebase(ArtistsBase);

export default Artists;