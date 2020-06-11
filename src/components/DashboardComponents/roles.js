import React, {Component} from "react";
import {withFirebase} from "../Firebase";

class RolesBase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            roles: [],
        };
    }
    componentDidMount() {
        this.setState({ loading: true });
        this.props.firebase.roles().on('value', snapshot => {
            const roleObject = snapshot.val();
            if (roleObject) {
                const roleList = Object.keys(roleObject).map(key => ({
                    ...roleObject[key],
                    uid: key,
                }));
                this.setState({
                    roles: roleList,
                    loading: false
                });
            } else {
                this.setState({ roles: null, loading: false });
            }
        });
    }
    componentWillUnmount() {
        this.props.firebase.roles().off();
    }
    render() {
        const { roles, loading } = this.state;
        return (
            <div>
                {loading && <div>Loading ...</div>}
                {roles ? (
                    <RoleList roles={roles} />
                ) : (
                    <div>There are no roles ...</div>
                )}
            </div>
        );
    }
}
const RoleList = ({ roles }) => (
    <ul className="list-group list-group-flush">
        {roles.map(role => (
            <RoleItem key={role.uid} role={role}/>
        ))}
    </ul>
);
const RoleItem = ({ role }) => (
    <li className="list-group-item">
        {role.name}
    </li>
);

const Roles = withFirebase(RolesBase);

export default Roles;