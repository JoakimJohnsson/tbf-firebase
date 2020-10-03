import React from 'react';
import FetchAllArtists from "../../api-functions/Artists";
import FetchMembersByArtist from "../../api-functions/Members";
import FetchPersonFromMember from "../../api-functions/Persons";

const ArtistList = () => {
    const artists = FetchAllArtists();
    return (
        <ul>
            {artists.map((artist) =>
                <li key={artist.id}>
                    {artist.name}
                    <MemberList artistId={artist.id}/>
                </li>
            )}
        </ul>
    )
};

const MemberList = (props) => {
    const members = FetchMembersByArtist(props.artistId);
    return (
        <ul>
            {members.map((member) =>
                <li key={member.id}>
                    <Person memberId={member.id}/>
                </li>
            )}
        </ul>
    )
};

const Person = (props) => {
    const person = FetchPersonFromMember(props.memberId)
    return <span>{person.firstName} {person.lastName}</span>
};

export default ArtistList;