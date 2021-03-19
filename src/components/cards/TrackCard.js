import React from 'react';
import Artist from "../apiComponents/ArtistComponents";
import {FetchTrackFromId} from "../../api-functions/tracks-api";
import LoadingLazyBackground from "../microComponents/LoadingLazyBackground";
import {FetchRecordFromId} from "../../api-functions/records-api";
import imgUnavailable from "../../images/image_unavailable.png";
import {Link} from "react-router-dom";

const TrackCard = ({id, url, recordId, reverse, linked}) => {

    const song = FetchTrackFromId(id);
    const coverUrl = FetchRecordFromId(recordId).coverUrl;
    let rand = Math.floor(Math.random() * 8) + 1;
    return song.artistId ?
        (<div className="col-12 p-3" key={song.id}>
            <div className={`song-card d-md-flex mb-2 text-color-variant__${rand.toString()}`}>

                <div className="song-card__content p-3">
                    {linked ?
                        <Link to={`record/${recordId}`}>
                            <img className="song-card__image" alt={`Cover for ${song.name}`} src={coverUrl || imgUnavailable}/>
                        </Link>
                        :
                        <img className="song-card__image" alt={`Cover for ${song.name}`} src={coverUrl || imgUnavailable}/>}

                    <div className="song-card__content-inner d-flex justify-content-center flex-column pl-3 w-100 ">
                        <p className="label mb-0">
                            {reverse ? song.name : <Artist id={song.artistId}/>}
                        </p>
                        <p className="small mb-0">
                            {reverse ?
                                <Artist id={song.artistId}/>
                                :
                                song.name}
                        </p>
                    </div>
                </div>
                <div className="song-card__audio px-3 pb-3 pb-md-0 w-100 d-flex align-items-center">
                    <audio controls className="w-100">
                        <source src={song.url} type="audio/mpeg"/>
                        <p>
                            Your browser doesn't support HTML5 audio. Here is a <a href={url}>link to the
                            audio</a> instead.
                        </p>
                    </audio>
                </div>
            </div>
        </div>)
        :
        <LoadingLazyBackground/>
};

export default TrackCard;