import {useState, useEffect} from 'react';
import firebase from "firebase";

function FetchAllArtists() {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .orderBy("name", "asc")
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

function FetchAllArtistsWithRecords() {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .where('hasRecords', '==', true)
            .orderBy("name", "asc")
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

function FetchArtistFromId(id) {
    const [artist, setArtist] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .doc(id)
            .get().then(function(doc) {
            setArtist(doc.data());
        });
    }, [id]);
    return artist;
}

function FetchArtistsWithLimit(limit) {
    const [Artists, setArtists] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .limit(limit)
            .onSnapshot((snapshot) => {
                const newArtists = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setArtists(newArtists)
            })
    }, [limit]);
    return Artists;
}

export default FetchAllArtists;
export {FetchArtistFromId, FetchArtistsWithLimit, FetchAllArtistsWithRecords};