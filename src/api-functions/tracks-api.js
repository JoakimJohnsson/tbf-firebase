import {useEffect, useState} from "react";
import firebase from "firebase";

function FetchAllTracks() {
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('songs')
            .onSnapshot((snapshot) => {
                const newTracks = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTracks(newTracks)
            })
    }, []);
    return tracks;
}

function FetchTracksByRecord(record) {
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('records')
            .doc(record).collection('songs')
            .orderBy("index", "asc")
            .onSnapshot((snapshot) => {
                const newTracks = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTracks(newTracks)
            })
    }, [record]);
    return tracks;
}

function FetchTracksByArtist(artistId) {
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('songs')
            .where("artistId", "==", artistId )
            .onSnapshot((snapshot) => {
                const newTracks = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTracks(newTracks)
            })
    }, [artistId]);
    return tracks;
}

function FetchTrackFromId(id) {
    const [track, setTrack] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('songs')
            .doc(id)
            .get().then(function(doc) {
            setTrack(doc.data());
        });
    }, [id]);
    return track;
}

export default FetchAllTracks;
export {FetchTracksByRecord, FetchTrackFromId, FetchTracksByArtist};