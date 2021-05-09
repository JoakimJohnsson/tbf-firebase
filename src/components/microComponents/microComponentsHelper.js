// Format information
import React from "react";

function formatInformationRenderIcon(format) {
    switch (format) {
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

function formatInformationRenderText(format) {
    const UNKNOWN_FORMAT = 'unknown';
    if(!format) format = UNKNOWN_FORMAT;
    switch (format) {
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

// Prepare filter text to allow for å, ä and ö
function prepareFilterText(filter) {
    return filter
        .toLowerCase()
        .replace('ö', 'o')
        .replace('ä', 'a')
        .replace('å', 'a')
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