import {useEffect, useState} from "react";
import firebase from "firebase";

function FetchAllSongs() {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('songs')
            .onSnapshot((snapshot) => {
                const newSongs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setSongs(newSongs)
            })
    }, []);
    return songs;
}

function FetchSongsByRecord(record) {
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('records')
            .doc(record).collection('songs')
            .orderBy("index", "asc")
            .onSnapshot((snapshot) => {
                const newSongs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setSongs(newSongs)
            })
    }, [record]);
    return songs;
}

function FetchSongFromId(id) {
    const [song, setSong] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('songs')
            .doc(id)
            .get().then(function(doc) {
            setSong(doc.data());
        });
    }, [id]);
    return song;
}

export default FetchAllSongs;
export {FetchSongsByRecord, FetchSongFromId};