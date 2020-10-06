import React, {useState, useEffect} from 'react';
import firebase from "firebase";

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
    }, []);
    return person;
}

export default FetchPersonFromId;