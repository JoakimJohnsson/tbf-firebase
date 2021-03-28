import React from "react";
import FetchPersonFromId, {FetchRole} from "../../api-functions/persons-api";

const Person = ({id, artistId}) => {
    const person = FetchPersonFromId(id);
    const role = FetchRole(id, artistId);
    return <span>{person.firstName} {person.lastName} {role ? `- ${role}` : ""}</span>
};

export default Person;
