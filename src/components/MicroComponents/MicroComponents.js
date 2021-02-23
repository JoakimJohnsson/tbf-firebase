import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const TodoComponent = (props) => (
    <p className="todo-component">
        <FontAwesomeIcon icon="wrench" spin/>
        <span>{props.todo}</span>
    </p>
);

const LoadingComponentStandard = ({text, icon, spinning}) => (
    <div className="loading-component">
        <div className="text-center">
            <p className="mb-3">{text || "Loading..."}</p>
            <p><FontAwesomeIcon icon={icon || "spinner"} spin={spinning} size="2x"/></p>
        </div>
    </div>
);

const LoadingComponent = () => {
    let rand2 = Math.floor(Math.random() * 8) + 1;
    return (
        <div className="w-100 h-100 p-3">
            <div className={`loading-component opacity-1 mb-3 bg-color-variant__${rand2.toString()}`}>
                <div className="sr-only">
                    Loading components
                </div>
            </div>
        </div>
    )
};

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
export {LoadingComponent, LoadingComponentStandard, CopyrightInfoComponent, FormatInfoComponent};

