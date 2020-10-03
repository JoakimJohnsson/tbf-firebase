import React, {useState, useEffect} from 'react';
import firebase from "firebase";

function FetchPersonFromMember(member) {
    const [person, setPerson] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('persons')
            .doc(member)
            .get().then(function(doc) {
            setPerson(doc.data());
        });
    }, []);
    return person;
}

export default FetchPersonFromMember;