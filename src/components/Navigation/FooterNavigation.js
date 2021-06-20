import React, {useContext, useEffect} from 'react';
import * as ROUTES from '../../constants/routes';
import Navbar from 'react-bootstrap/Navbar';
import FooterNavLink, {FooterNavLinkButton} from "./FooterNavLink";
import {Context} from "../MusicStore/MusicStore";
import TrackPlayer from "../TrackPlayer/TrackPlayer";
import {GlobalTrackContext} from "../MusicStore/GlobalTrackStore";
import {FetchAllTracks} from "../../api-functions/api";
import LoadingStandard from "../microComponents/Loading/LoadingStandard";

export const showUpload = false;

const FooterNavigation = () => {
    const [trackState, setTrackState] = useContext(Context);
    const [globalTrackList, setGlobalTrackList] = useContext(GlobalTrackContext);
    const tracks = FetchAllTracks();

    const updateState = () => {
        setTrackState({
            currentTrack: 35
        })
    }

    useEffect(() => {
        setGlobalTrackList(tracks);
    });

    return globalTrackList.length ? (
            <Navbar className="navbar-footer p-0 d-flex flex-column" variant="dark" expand="true">
                {trackState.currentTrack ? <TrackPlayer id={trackState.currentTrack} key={trackState.currentTrack}/> : false}
                <div className="d-flex flex-row w-100 justify-content-center bg-dark">
                    <FooterNavLink link={ROUTES.START} text={"Start"} icon={"home"}/>
                    <FooterNavLink link={ROUTES.ARTISTS} text={"Artists"} icon={"user-astronaut"}/>
                    <FooterNavLink link={ROUTES.RECORDS} text={"Records"} icon={"compact-disc"}/>
                    <FooterNavLink link={ROUTES.TRACKS} text={"Tracks"} icon={"music"}/>
                    <FooterNavLinkButton text={"Shuffle"} icon={"random"} onClick={updateState}/>
                    {showUpload ? <FooterNavLink link={ROUTES.UPLOAD} text={"Upload"} icon={"plus"}/> : false}
                </div>
            </Navbar>
        )
        :
        <LoadingStandard spinning={true}/>
};

export default FooterNavigation;
