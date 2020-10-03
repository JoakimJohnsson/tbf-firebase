import React from "react";
import FetchPersonFromId from "../../../../api-functions/Persons";

const Person = (props) => {
    const person = FetchPersonFromId(props.id)
    return <span>{person.firstName} {person.lastName}</span>
};

export default Person;
