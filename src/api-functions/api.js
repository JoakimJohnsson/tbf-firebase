import {useState, useEffect, useContext} from 'react';
import firebase from "firebase";
import {GlobalTrackContext} from "../components/MusicStore/GlobalTrackStore";

// ARTISTS

// Fetch all artists
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

// Fetch all artists with records
function FetchAllArtistsWithRecords() {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .where('hasRecords', '==', true)
            .orderBy("name", "asc")
            .onSnapshot((snapshot) => {
                const newArtistsWithRecords = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setArtists(newArtistsWithRecords)
            })
    }, []);
    return artists;
}

// Fetch artist from id
function FetchArtistFromId(id) {
    const [artist, setArtist] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .doc(id)
            .get().then(function (doc) {
            setArtist(doc.data());
        });
    }, [id]);
    return artist;
}

export {FetchAllArtists, FetchAllArtistsWithRecords, FetchArtistFromId};

// MEMBERS

// Fetch members by artist
function FetchMembersByArtist(artist) {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .doc(artist).collection('members')
            .onSnapshot((snapshot) => {
                const newMembers = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setMembers(newMembers)
            })
    }, [artist]);
    return members;
}

export {FetchMembersByArtist}

// COUNTERS

// Fetch counters
function FetchCounters() {
    const [counters, setCounters] = useState({});
    useEffect(() => {
        firebase
            .firestore()
            .collection('stats')
            .doc('counters')
            .get().then(function (doc) {
            setCounters(doc.data());
        });
    }, []);
    return counters;
}

export {FetchCounters};

// LAST UPDATED OR ADDED

// Fetch id for last updated artist
function FetchLastUpdatedArtistId() {
    const [artistId, setArtistId] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('stats')
            .doc('lastUpdatedArtist')
            .get().then(function (doc) {
            setArtistId(doc.data().artistId);
        });
    }, []);
    return artistId;
}

// Fetch id for last added record
function FetchLastAddedRecordId() {
    const [recordId, setRecordId] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('stats')
            .doc('lastAddedRecord')
            .get().then(function(doc) {
            setRecordId(doc.data().recordId);
        });
    }, []);
    return recordId;
}

// Fetch artist id for last added record
function FetchLastAddedRecordArtistId() {
    const [artistId, setArtistId] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('stats')
            .doc('lastAddedRecord')
            .get().then(function(doc) {
            setArtistId(doc.data().artistId);
        });
    }, []);
    return artistId;
}

// Fetch timestamp for when last artist was updated
function FetchLastUpdatedArtistTimestamp() {
    const [timestamp, setTimestamp] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('stats')
            .doc('lastUpdatedArtist')
            .get().then(function (doc) {
            setTimestamp(doc.data().date);
        });
    }, []);
    return timestamp;
}

// Fetch timestamp for when last record was added
function FetchLastAddedRecordTimestamp() {
    const [timestamp, setTimestamp] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('stats')
            .doc('lastAddedRecord')
            .get().then(function(doc) {
            setTimestamp(doc.data().date);
        });
    }, []);
    return timestamp;
}

export {FetchLastUpdatedArtistId, FetchLastAddedRecordId, FetchLastAddedRecordArtistId, FetchLastUpdatedArtistTimestamp, FetchLastAddedRecordTimestamp};

// ROLE

// Fetch role for artist member
function FetchRole(id, artistId) {
    const [role, setRole] = useState("");
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .doc(artistId).collection('members')
            .doc(id)
            .get().then(function (doc) {
            setRole(doc.data().role);
        });
    }, [id, artistId]);
    return role;
}

export {FetchRole};

// PERSON

// Fetch person from id
function FetchPersonFromId(id) {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('persons')
            .doc(id)
            .get().then(function (doc) {
            setPerson(doc.data());
        });
    }, [id]);
    return person;
}

export {FetchPersonFromId};

// RECORDS

// Fetch all records
function FetchAllRecords() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('records')
            .orderBy('artistId', 'asc')
            .onSnapshot((snapshot) => {
                const newRecords = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRecords(newRecords)
            })
    }, []);
    return records;
}

// Fetch records by artist
function FetchRecordsByArtist(artistId) {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('records')
            .where("artistId", "==", artistId )
            .onSnapshot((snapshot) => {
                const newRecordsByArtist = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRecords(newRecordsByArtist)
            })
    }, [artistId]);
    return records;
}

// Fetch record from id
function FetchRecordFromId(id) {
    const [record, setRecord] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('records')
            .doc(id)
            .get().then(function(doc) {
            setRecord(doc.data());
        });
    }, [id]);
    return record;
}

export {FetchAllRecords, FetchRecordsByArtist, FetchRecordFromId};

// TRACKS

// Fetch all tracks
function FetchAllTracks() {
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        // Use effect cleanup
        let isSubscribed = true;
        firebase
            .firestore()
            .collection('songs')
            .orderBy('recordId', 'asc')
            .orderBy('index', 'asc')
            .onSnapshot((snapshot) => {
                if (isSubscribed) {
                    const newTracks = snapshot.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setTracks(newTracks)
                }
            })
        return () => (isSubscribed = false)
    }, []);
    return tracks;
}

// Fetch tracks by record
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

// Fetch tracks by artist
function FetchTracksByArtist(artistId) {
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('songs')
            .where("artistId", "==", artistId)
            .onSnapshot((snapshot) => {
                const newTracksByArtist = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setTracks(newTracksByArtist)
            })
    }, [artistId]);
    return tracks;
}

// Fetch global track list track from id
function FetchTrackFromId(id) {
    let globalTrackList = useContext(GlobalTrackContext);
    globalTrackList = globalTrackList[0];
    return globalTrackList.find(e => e.id === id);
}

export {FetchAllTracks, FetchTracksByRecord, FetchTracksByArtist, FetchTrackFromId};
