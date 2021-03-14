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

export {formatInformationRenderIcon, formatInformationRenderText}