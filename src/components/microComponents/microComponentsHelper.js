// Format information
import React from "react";
import {FORMAT} from "../../constants/strings";

function formatInformationRenderIcon(format) {
    switch (format) {
        case FORMAT[1].TEXT:
            return FORMAT[1].ICON;
        case FORMAT[2].TEXT:
            return FORMAT[2].ICON;
        case FORMAT[3].TEXT:
            return FORMAT[3].ICON;
        case FORMAT[4].TEXT:
            return FORMAT[4].ICON;
        default:
            return FORMAT[1].ICON;
    }
}

function formatInformationRenderText(format) {
    if(!format) {
        format = FORMAT[5].TEXT;
    }
    switch (format) {
        case FORMAT[1].TEXT:
            return FORMAT[1].TEXT + ' /';
        case FORMAT[2].TEXT:
            return FORMAT[2].TEXT + ' /';
        case FORMAT[3].TEXT:
            return FORMAT[3].TEXT + ' /';
        case FORMAT[4].TEXT:
            return FORMAT[4].TEXT + ' /';
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

// Format time display
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
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

export {formatInformationRenderIcon, formatInformationRenderText, prepareFilterText, randomizer, colorRandomizer, fontRandomizer, formatTime, Debugger}