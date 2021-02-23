import React from "react";
import FetchMembersByArtist from "../../api-functions/members-api";
import Person from "./PersonItem";
import {LoadingComponentStandard} from "../MicroComponents/MicroComponents";

const MembersByArtistList = ({artistId}) => {
    const members = FetchMembersByArtist(artistId);
    return members.length ?
        (<ul className="list-unstyled">
            {members.map((member) =>
                <li key={member.id}>
                    <Person id={member.id} artistId={artistId}/>
                </li>
            )}
        </ul>)
        :
        (<LoadingComponentStandard text="No members available at this time." icon="users-slash" spinning={false}/>)
};

export default MembersByArtistList;
