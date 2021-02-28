import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {formatInformationRenderIcon, formatInformationRenderText} from "./microComponentsHelper";

const Debugger = ({logThis}) => {
    console.log("LOG THIS: " + logThis)
    return (
        <></>
    )
}

const LoadingStandard = ({text, icon, spinning}) => (
    <div className="loading-component">
        <div className="text-center">
            <p className="mb-3">{text || "Loading..."}</p>
            <p><FontAwesomeIcon icon={icon || "spinner"} spin={spinning} size="2x"/></p>
        </div>

    </div>
);

const LoadingLazyBackground = () => {
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

const CopyrightInformation = (props) => (
    <div className={props.className}>
        <p className="small">Site content <FontAwesomeIcon icon={['far', 'copyright']}/> 2020 Joakim Johnsson</p>
        <p className="small">Except where otherwise noted, creative content on this site is licensed under
            a <a rel="license" href="http://creativecommons.org/licenses/by/3.0/deed.en_US">Creative Commons
                Attribution 3.0 Unported License</a>.
        </p>
    </div>
);

const FormatInformation = ({format, text}) => (
    <span className="text-capitalize"><FontAwesomeIcon icon={formatInformationRenderIcon(format)} className={"mr-1"}/>
    {text ?
        formatInformationRenderText(format)
        :
        ""}
    </span>
);

export default Debugger;
export {LoadingLazyBackground, LoadingStandard, CopyrightInformation, FormatInformation};

