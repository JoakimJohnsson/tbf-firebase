import React from "react";
import {Link} from "react-router-dom";
import imgUnavailable from "../../images/image_unavailable.png";
import Artist from "../lists/ArtistItem";
import * as COLUMNS from "../../constants/cols";
import SongsByRecordList from "../lists/SongsByRecordList";
import {FormatInfoComponent} from "../MicroComponents/MicroComponents";
import {FetchArtistFromId} from "../../api-functions/artists-api";
import {FetchRecordFromId} from "../../api-functions/records-api";

const RecordCard = ({route, id, name, artistId, coverUrl, fullWidth, year, format}) => {
    let rand = Math.floor(Math.random() * 8) + 1;
    return (
        <div className={fullWidth ? COLUMNS.RECORDS_FULLWIDTH : COLUMNS.RECORDS_MAIN} key={id}>
            <div className={`record-card`}>
                <img alt={`Cover for ${name}`} src={coverUrl || imgUnavailable}/>
                <div className={`record-card__content p-3`}>
                    <Link to={`/${route}/${id}`}>
                        <p className={`card-title`}><Artist id={artistId}/></p>
                        <p className={`card-sub-title text-color-variant__${rand.toString()}`}>{name}</p>
                        <p className={`card-sub-title text-color-variant__${rand.toString()}`}><FormatInfoComponent format={format} text={false}/> {year}</p>
                    </Link>
                </div>
            </div>
        </div>
    )
};

const RecordLink = (props) => {
    const record = FetchRecordFromId(props.id);
    return <>
        <Link to={`/record/${props.id}`}>
            <span>{record.name}</span>
        </Link>
    </>
};

const RecordCardWithSongs = ({id, name, artistId}) => {
    return (
        <div className="record-card-with-songs col-12">
            <h2 className="section-header"><Artist id={artistId}/>: {name}</h2>
            <SongsByRecordList recordId={id}/>
        </div>
    )
};

export default RecordCard;
export {RecordCardWithSongs, RecordLink};
