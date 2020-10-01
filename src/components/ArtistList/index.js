import React, {useState, useEffect} from 'react';
import firebase from "firebase";

// https://www.youtube.com/watch?v=rSgbYCdc4G0&t=1142s

function FetchArtists() {
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .onSnapshot((snapshot) => {
                const newArtists = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setArtists(newArtists)
            })
    }, []);

    return artists;
}

const ArtistList = () => {

    const artists = FetchArtists();

    return (

        <ul>
            {artists.map((artist) =>
                <li>{artist.name}</li>
            )}
        </ul>

    )

};

export default ArtistList;