import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {formatInformationRenderIcon, formatInformationRenderText} from "./microComponentsHelper";

const FormatInformation = ({format, text}) => (
    <span className="text-capitalize"><FontAwesomeIcon icon={formatInformationRenderIcon(format)} className={"mr-1"}/>
    {text ?
        formatInformationRenderText(format)
        :
        ""}
    </span>
);

export {FormatInformation};
