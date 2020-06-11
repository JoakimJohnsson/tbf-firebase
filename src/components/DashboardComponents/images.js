import React, {Component} from "react";
import {withFirebase} from "../Firebase";

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
    render() {
        const { images, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}
                {images ? (
                    <ImageList images={images} />
                ) : (
                    <div>There are no images ...</div>
                )}
            </div>
        );
    }
}
const ImageList = ({ images }) => (
    <ul className="list-group list-group-flush">
        {images.map(image => (
            <ImageItem key={image.uid} image={image}/>
        ))}
    </ul>
);
const ImageItem = ({ image }) => (
    <li className="list-group-item">
        {image.name}
    </li>
);

const Images = withFirebase(ImagesBase);

export default Images;