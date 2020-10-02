import React, {useState, useEffect} from 'react';
import firebase from "firebase";

function FetchArtists() {
    const [artists, setArtists] = useState([]);
    useEffect(() => {
        firebase
            .firestore()
            .collection('artists')
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

function FetchMembers(artist) {
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
    }, []);
    return members;
}

function FetchPerson(member) {
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

const ArtistList = () => {
    const artists = FetchArtists();
    return (
        <ul>
            {artists.map((artist) =>
                <li key={artist.id}>
                    {artist.name}
                    <MemberList artistId={artist.id}/>
                </li>
            )}
        </ul>
    )
};

const MemberList = (props) => {
    const members = FetchMembers(props.artistId);
    return (
        <ul>
            {members.map((member) =>
                <li key={member.id}>
                    <Person memberId={member.id}/>
                </li>
            )}
        </ul>
    )
};

const Person = (props) => {
    const person = FetchPerson(props.memberId)
    return <span>{person.firstName} {person.lastName}</span>
};

export default ArtistList;