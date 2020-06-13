import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";
import * as ROUTES from "../../constants/routes";

const Message = props => <div>{props.msg}</div>;

const TodoComponent = (props) => (
    <p className="todo-component">
        <FontAwesomeIcon icon="wrench" spin/>
        <span>{props.todo}</span>
    </p>
);

const LoadingComponent = () => (
    <div className="loading-component">
        <FontAwesomeIcon icon="spinner" spin size="2x"/>
    </div>
);

const AdminCard = (props) => (
    <div className="card h-100">
        <div className="card-header">
            <h3 className="text-uppercase m-0 pt-2">{props.username}</h3>
        </div>
        <div className="card-body">
            <p>
                <strong>ID:</strong> {props.uid}
            </p>
            <p>
                <strong>E-Mail:</strong> {props.email}
            </p>
            <p>
                <Link
                    to={{
                        pathname: `${ROUTES.ADMINISTRATION}/${props.uid}`,
                        state: props.user,
                    }}
                >
                    Details
                </Link>
            </p>
        </div>
    </div>
);

export default TodoComponent;
export {Message, AdminCard, LoadingComponent};

