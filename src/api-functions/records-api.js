import {useEffect, useState} from "react";
import firebase from "firebase";

function FetchAllRecords() {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('records')
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

function FetchRecordsByArtist(artistId) {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('records')
            .where("artistId", "==", artistId )
            .onSnapshot((snapshot) => {
                const newRecords = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setRecords(newRecords)
            })
    }, [artistId]);
    return records;
}

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

export default FetchAllRecords;
export {FetchRecordFromId, FetchRecordsByArtist};