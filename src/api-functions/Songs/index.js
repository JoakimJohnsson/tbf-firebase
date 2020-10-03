import React, {useEffect, useState} from "react";
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

export default FetchAllSongs;
export {FetchSongsByRecord};