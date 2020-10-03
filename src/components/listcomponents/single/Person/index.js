import React from "react";
import FetchPersonFromMember from "../../../../api-functions/Persons";

const Person = (props) => {
    const person = FetchPersonFromMember(props.memberId)
    return <span>{person.firstName} {person.lastName}</span>
};

export default Person;
