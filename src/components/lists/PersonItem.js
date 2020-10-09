import React from "react";
import FetchPersonFromId from "../../api-functions/persons-api";

const Person = (props) => {
    const person = FetchPersonFromId(props.id)
    return <span>{person.firstName} {person.lastName}</span>
};

export default Person;
