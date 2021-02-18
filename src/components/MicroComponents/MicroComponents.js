import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const TodoComponent = (props) => (
    <p className="todo-component">
        <FontAwesomeIcon icon="wrench" spin/>
        <span>{props.todo}</span>
    </p>
);

const LoadingComponent = ({text, icon, spinning}) => (
    <div className="loading-component">
        <div className="text-center">
        <p className="mb-3">{text || "Loading..."}</p>
        <p><FontAwesomeIcon icon={icon || "spinner"} spin={spinning} size="2x"/></p>
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

const CopyrightInfoComponent = (props) => (
    <div className={props.className}>
        <p className="small">Site content <FontAwesomeIcon icon={['far', 'copyright']}/> 2020 Joakim Johnsson</p>
        <p className="small">Except where otherwise noted, creative content on this site is licensed under
            a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons
                Attribution 3.0 Unported License</a>.
        </p>
    </div>
);

function renderIcon(format) {
    switch(format) {
        case 'cd-r':
            return 'compact-disc';
        case '7" vinyl':
            return 'record-vinyl';
        case 'online':
            return 'robot';
        case 'cassette':
            return 'vr-cardboard';
        default:
            return 'compact-disc';
    }
}
function renderText(format) {
    switch(format) {
        case 'cd-r':
            return 'cd-r /';
        case '7" vinyl':
            return '7" vinyl /';
        case 'online':
            return 'online /';
        case 'cassette':
            return 'cassette /';
        default:
            return `${format} /`;
    }
}

const FormatInfoComponent = ({format, text}) => (
    <span className="text-capitalize"><FontAwesomeIcon icon={renderIcon(format)} className={"mr-1"}/> {text ? renderText(format) : ""}</span>
);

export default TodoComponent;
export {LoadingComponent, DashboardListItemButton, CopyrightInfoComponent, FormatInfoComponent};

