import React from 'react';
import {ArtistLink} from "../lists/ArtistItem";

const DefaultRecordDescription = (props) => {
    return (
        <p>
            {props.record.name} by <ArtistLink id={props.record.artistId}/> was released {
            (props.record.format === "cassette") ||
            (props.record.format === "cd-r") ||
            (props.record.format === '7" vinyl') ?
                "on "
                :
                ""}
            {props.record.format} in {props.record.year}.
        </p>
    )
}

export default DefaultRecordDescription;