import React, {useEffect, useState} from "react";
import FetchPersonFromId from "../../api-functions/persons-api";
import firebase from "firebase";

/**
 * @return {string}
 */
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
    }, [id]);
    return role;
}

const Person = ({id, artistId}) => {
    const person = FetchPersonFromId(id);
    const role = FetchRole(id, artistId);
    return <span>{person.firstName} {person.lastName} {role ? `- ${role}` : ""}</span>
};

export default Person;
