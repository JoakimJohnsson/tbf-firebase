import React, {useEffect, useState} from "react";
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

export default FetchAllRecords;