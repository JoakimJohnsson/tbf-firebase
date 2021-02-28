import React from "react";
import FetchMembersByArtist from "../../api-functions/members-api";
import Person from "../api-components/PersonComponents";
import {LoadingStandard} from "../MicroComponents/MicroComponents";

const MembersByArtist = ({artistId}) => {
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
        (<LoadingStandard text="No members available at this time." icon="users-slash" spinning={false}/>)
};

export default MembersByArtist;
