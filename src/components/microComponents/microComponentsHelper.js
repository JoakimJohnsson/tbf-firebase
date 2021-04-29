// Format information
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

export {formatInformationRenderIcon, formatInformationRenderText, randomizer, colorRandomizer, fontRandomizer}