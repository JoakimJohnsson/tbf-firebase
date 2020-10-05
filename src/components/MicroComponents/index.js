import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const TodoComponent = (props) => (
    <p className="todo-component">
        <FontAwesomeIcon icon="wrench" spin/>
        <span>{props.todo}</span>
    </p>
);

const LoadingComponent = (props) => (
    <div className="loading-component">
        <div className="text-center">
        <p className="mb-3">{props.text || "Loading..."}</p>
        <p><FontAwesomeIcon icon="spinner" spin size="2x"/></p>
        </div>
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

const CopyrightInfoComponent = () => (
    <div>
        <p className="small">Site content <FontAwesomeIcon icon={['far', 'copyright']}/> 2020 Joakim Johnsson</p>
        <p className="small">Except where otherwise noted, creative content on this site is licensed under
            a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons
                Attribution 3.0 Unported License</a>.
        </p>
    </div>
);

export default TodoComponent;
export {LoadingComponent, DashboardListItemButton, CopyrightInfoComponent};

