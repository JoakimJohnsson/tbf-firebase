import React from 'react';
import {ArtistLink} from "../apiComponents/ArtistComponents";

const DefaultRecordDescription = (props) => {
    return (
        <>
            {props.record.name} by <ArtistLink id={props.record.artistId} className={"text-uppercase"}/> was released {
            (props.record.format === "cassette") ||
            (props.record.format === "cd-r") ||
            (props.record.format === '7" vinyl') ?
                "on "
                :
                ""}
            {props.record.format} in {props.record.year}.
        </>
    )
}

export default DefaultRecordDescription;