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

const DashboardListItemButton = (props) => (
    <button
        type="button"
        aria-label={`${props.action} ${props.listItem.name}`}
        className="btn btn-fa__primary ml-2"
        onClick={() => props.onClick()}
    >
        <FontAwesomeIcon icon={props.icon} />
    </button>
);

export default TodoComponent;
export {Message, LoadingComponent, DashboardListItemButton};

