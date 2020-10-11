import React from "react";
import FetchMembersByArtist from "../../api-functions/members-api";
import Person from "./PersonItem";
import {LoadingComponent} from "../MicroComponents/MicroComponents";

const MembersByArtistList = (props) => {
    const members = FetchMembersByArtist(props.artistId);
    return members.length ?
        (<ul className="list-unstyled">
            {members.map((member) =>
                <li key={member.id}>
                    <Person id={member.id}/>
                </li>
            )}
        </ul>)
        :
        (<LoadingComponent text="No members available at this time." icon="users-slash" spinning={false}/>)
};

export default MembersByArtistList;
