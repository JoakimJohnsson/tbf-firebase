import React from 'react';
import DefaultArtistDescription from "../DefaultDescriptions/DefaultDescriptions";

const RecordDescription = ({record}) => (
    <>
        <h2>Description</h2>
        <p>
            {record.description !== "" ?
                record.description
                :
                <DefaultArtistDescription record={record}/>}
        </p>
    </>
);

export default RecordDescription;
