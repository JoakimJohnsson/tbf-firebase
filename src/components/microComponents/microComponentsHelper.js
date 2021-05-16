// Format information
import React from "react";
import {FORMAT} from "../../constants/strings";

function formatInformationRenderIcon(format) {
    switch (format) {
        case FORMAT[1].FORMAT:
            return FORMAT[1].ICON;
        case FORMAT[2].FORMAT:
            return FORMAT[2].ICON;
        case FORMAT[3].FORMAT:
            return FORMAT[3].ICON;
        case FORMAT[4].FORMAT:
            return FORMAT[4].ICON;
        default:
            return FORMAT[1].ICON;
    }
}

function formatInformationRenderText(format) {
    if(!format) format = FORMAT[5].FORMAT;;
    switch (format) {
        case FORMAT[1].FORMAT:
            return FORMAT[1].FORMAT + ' /';
        case FORMAT[2].FORMAT:
            return FORMAT[2].FORMAT + ' /';
        case FORMAT[3].FORMAT:
            return FORMAT[3].FORMAT + ' /';
        case FORMAT[4].FORMAT:
            return FORMAT[4].FORMAT + ' /';
        default:
            return `${format} /`;
    }
}

// Prepare filter text to allow for å, ä and ö
function prepareFilterText(filter) {
    return filter
        .toLowerCase()
        .replace('ö', 'o')
        .replace('ä', 'a')
        .replace('å', 'a')
        .replace('-', ' ')
}

// Randomizer
function randomizer(count, addOn) {
    return Math.floor(Math.random() * count) + addOn;
}
function colorRandomizer() {
    return randomizer(16, 1);
}
function fontRandomizer() {
    return randomizer(8, 1);
}

const Debugger = ({logThis}) => {
    console.log("DEBUGGER - LOG")
    console.log("-------")
    console.log(logThis)
    console.log("-------")
    return (
        <></>
    )
}

export {formatInformationRenderIcon, formatInformationRenderText, prepareFilterText, randomizer, colorRandomizer, fontRandomizer, Debugger}