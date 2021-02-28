import {useState, useEffect} from 'react';
import firebase from "firebase";

function FetchRole(id, artistId) {
    const [role, setRole] = useState("");
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
            .doc(artistId).collection('members')
            .doc(id)
            .get().then(function(doc) {
            setRole(doc.data().role);
        });
    }, [id, artistId]);
    return role;
}

function FetchPersonFromId(id) {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('persons')
            .doc(id)
            .get().then(function(doc) {
            setPerson(doc.data());
        });
    }, [id]);
    return person;
}

export {FetchRole}
export default FetchPersonFromId;