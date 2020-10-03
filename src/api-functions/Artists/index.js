import React, {useState, useEffect} from 'react';
import firebase from "firebase";

function FetchAllArtists() {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .onSnapshot((snapshot) => {
                const newArtists = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setArtists(newArtists)
            })
    }, []);
    return artists;
}

export default FetchAllArtists;