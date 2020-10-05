import React from "react";
import FetchMembersByArtist from "../../../../api-functions/Members";
import Person from "../../single/Person";
import {LoadingComponent} from "../../../MicroComponents";

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
        (<LoadingComponent text="Loading members..."/>)
};

export default MembersByArtistList;
