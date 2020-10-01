import React, {useState, useEffect} from 'react';
import firebase from "firebase";

// https://www.youtube.com/watch?v=rSgbYCdc4G0&t=1142s

function FetchSongs() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('songs')
            .onSnapshot((snapshot) => {
                const newSongs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))
                setSongs(newSongs)
            })
    }, []);

    return songs;
}

const SongList = () => {

    const songs = FetchSongs();

    return (

        <ul>
            {songs.map((song) =>
                <li>
                    <a href={song.location}>
                    {song.name}
                    </a>
                </li>
            )}
        </ul>

    )

};

export default SongList;