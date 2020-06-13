import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {LoadingComponent} from "../../MicroComponents";
import {DashboardListUl} from "../../DashboardComponents";

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
                {loading && <LoadingComponent />}
                {images ? (
                    <DashboardListUl list={images} />
                ) : (
                    <div>There are no images ...</div>
                )}
            </div>
        );
    }
}

const Images = withFirebase(ImagesBase);

export default Images;