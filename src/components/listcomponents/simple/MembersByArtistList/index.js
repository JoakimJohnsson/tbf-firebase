import React from "react";
import FetchMembersByArtist from "../../../../api-functions/Members";
import Person from "../../single/Person";

const MembersByArtistList = (props) => {
    const members = FetchMembersByArtist(props.artistId);
    return (
        <ul>
            {members.map((member) =>
                <li key={member.id}>
                    <Person id={member.id}/>
                </li>
            )}
        </ul>
    )
};

export default MembersByArtistList;
