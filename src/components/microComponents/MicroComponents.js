import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {formatInformationRenderIcon, formatInformationRenderText} from "./microComponentsHelper";

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

const FormatInformation = ({format, text}) => (
    <span className="text-capitalize"><FontAwesomeIcon icon={formatInformationRenderIcon(format)} className={"mr-1"}/>
    {text ?
        formatInformationRenderText(format)
        :
        ""}
    </span>
);

export {LoadingLazyBackground, FormatInformation};
