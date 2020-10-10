import React from 'react';
import Artist from "../lists/ArtistItem";
import {FetchSongFromId} from "../../api-functions/songs-api";
import {LoadingComponent} from "../MicroComponents/MicroComponents";
import {FetchRecordFromId} from "../../api-functions/records-api";
import imgUnavailable from "../../images/image_unavailable.png";
import * as COLUMNS from "../../constants/cols";

const SongCard = ({id, fullWidth, url, recordId}) => {

    const song = FetchSongFromId(id);
    const coverUrl = FetchRecordFromId(recordId).coverUrl;
    let rand = Math.floor(Math.random() * 4) + 1;
    return song.artistId ? (
            <div className={fullWidth ? COLUMNS.SONGS_FULLWIDTH : COLUMNS.SONGS_MAIN} key={song.id}>
                <div className={`song-card__simple mb-2 text-color-variant__${rand.toString()}`}>
                    <img alt={`Cover for ${song.name}`} src={coverUrl || imgUnavailable}/>
                    <div className="song-card__content p-3">
                        <p className="label mb-1"><Artist id={song.artistId}/></p>
                        <p className="small mb-3">{song.name}</p>
                        <audio controls className="w-100">
                            <source src={song.url} type="audio/mpeg"/>
                            <p>
                                Your browser doesn't support HTML5 audio. Here is a <a href={url}>link to the
                                audio</a> instead.
                            </p>
                        </audio>
                    </div>
                </div>
            </div>
        )
        :
        <LoadingComponent/>
};

export default SongCard;