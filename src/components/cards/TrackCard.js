import React from 'react';
import Artist from "../apiComponents/ArtistComponents";
import LoadingLazyBackground from "../microComponents/Loading/LoadingLazyBackground";
import {FetchRecordFromId, FetchTrackFromId} from "../../api-functions/api";
import imgUnavailable from "../../images/image_unavailable.png";
import {Link} from "react-router-dom";
import {colorRandomizer} from "../microComponents/microComponentsHelper";

const TrackCard = ({id, url, recordId, reverse, linked}) => {

    const track = FetchTrackFromId(id);
    const coverUrl = FetchRecordFromId(recordId).coverUrl;
    return track.artistId ?
        (<div className="col-12 p-3" key={track.id}>
            <div className={`track-card d-md-flex mb-2 text-color-variant__${colorRandomizer().toString()}`}>

                <div className="track-card__content p-3">
                    {linked ?
                        <Link to={`record/${recordId}`}>
                            <img className="track-card__image" alt={`Cover for ${track.name}`} src={coverUrl || imgUnavailable}/>
                        </Link>
                        :
                        <img className="track-card__image" alt={`Cover for ${track.name}`} src={coverUrl || imgUnavailable}/>}

                    <div className="track-card__content-inner d-flex justify-content-center flex-column pl-3 w-100 ">
                        <p className="label mb-0">
                            {reverse ? track.name : <Artist id={track.artistId}/>}
                        </p>
                        <p className="small mb-0">
                            {reverse ?
                                <Artist id={track.artistId}/>
                                :
                                track.name}
                        </p>
                    </div>
                </div>
                <div className="track-card__audio px-3 pb-3 pb-md-0 w-100 d-flex align-items-center">
                    <audio controls className="w-100">
                        <source src={track.url} type="audio/mpeg"/>
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