import {useState, useEffect} from 'react';
import firebase from "firebase";

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

export default FetchMembersByArtist;