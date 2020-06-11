import React, {Component} from "react";
import {withFirebase} from "../Firebase";

class PersonsBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            persons: [],
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.persons().on('value', snapshot => {
            const personObject = snapshot.val();
            if (personObject) {
                const personList = Object.keys(personObject).map(key => ({
                    ...personObject[key],
                    uid: key,
                }));
                this.setState({
                    persons: personList,
                    loading: false
                });
            } else {
                this.setState({ persons: null, loading: false });
            }
        });
    }
    componentWillUnmount() {
        this.props.firebase.persons().off();
    }
    render() {
        const { persons, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}
                {persons ? (
                    <PersonList persons={persons} />
                ) : (
                    <div>There are no persons ...</div>
                )}
            </div>
        );
    }
}
const PersonList = ({ persons }) => (
    <ul className="list-group list-group-flush">
        {persons.map(person => (
            <PersonItem key={person.uid} person={person}/>
        ))}
    </ul>
);
const PersonItem = ({ person }) => (
    <li className="list-group-item">
       {person.firstName} {person.lastName}
    </li>
);

const Persons = withFirebase(PersonsBase);

export default Persons;