import React, {Component} from "react";
import {withFirebase} from "../../Firebase";
import {LoadingComponent} from "../../MicroComponents";
import {DashboardListUl} from "../../DashboardComponents";

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
    onRemovePerson = uid => {
        this.props.firebase.person(uid).remove();
    };

    // onEditPerson = () => {
    // ...
    // };

    render() {
        const { persons, loading } = this.state;
        return (
            <div>
                {loading && <LoadingComponent />}
                {persons ? (
                    <DashboardListUl
                        list={persons}
                        onRemove={this.onRemovePerson}
                    />
                ) : (
                    <div>There are no persons ...</div>
                )}
            </div>
        );
    }
}

const Persons = withFirebase(PersonsBase);

export default Persons;