const { randomizer, colorRandomizer, fontRandomizer, formatInformationRenderIcon, formatInformationRenderText, prepareFilterText } = require("./microComponentsHelper");
const {FORMAT} = require("../../constants/strings");
const STRING_UNEXPECTED = 'Poo foo yoo';
const STRING_UNEXPECTED_TEXT = 'Poo foo yoo /';
const STRING_UNKNOWN = 'unknown /';

test('Render Icon: Format string input should render correct icon string.', () => {
    // Arrange
    const numberOfFormatsToTest = 4;
    let counter = 1;
    while (counter < numberOfFormatsToTest) {
        // Act
        const result = formatInformationRenderIcon(FORMAT[counter].TEXT)
        // Assert
        expect(result).toBe(FORMAT[counter].ICON);
        counter++;
    }
});

test('Render icon - Missing format returns default icon string: "' + FORMAT[1].ICON + '".', () => {
    expect(formatInformationRenderIcon()).toBe(FORMAT[1].ICON);
});

test('Render icon - Unexpected format returns default icon string.', () => {
    expect(formatInformationRenderIcon(STRING_UNEXPECTED_TEXT)).toBe(FORMAT[1].ICON);
});

test('Render text - Format string: TEXT[X].TEXT returns text string: TEXT[X].TEXT.', () => {
    // Arrange
    const numberOfFormatsToTest = 4;
    let counter = 1;
    while (counter < numberOfFormatsToTest) {
        // Act
        const result = formatInformationRenderText(FORMAT[counter].TEXT);
        // Assert
        expect(result).toBe(FORMAT[counter].TEXT + ' /');
        counter++;
    }
});

test('Render text - Missing format returns text string: "' + STRING_UNKNOWN + '".', () => {
    expect(formatInformationRenderText()).toBe(STRING_UNKNOWN);
});

test('Render text - Unexpected format returns text string: "' + STRING_UNEXPECTED_TEXT + '".', () => {
    expect(formatInformationRenderText(STRING_UNEXPECTED)).toBe(STRING_UNEXPECTED_TEXT);
});

test('Randomizer - Generates a random number between 1 and 5', () => {
    expect(randomizer(5, 1)).toBeLessThanOrEqual(5, 1);
});

test('Color Randomizer - Generates a random number between 1 and 16', () => {
    expect(colorRandomizer()).toBeLessThanOrEqual(16, 1);
});

test('Font Randomizer - Generates a random number between 1 and 8', () => {
    expect(fontRandomizer()).toBeLessThanOrEqual(8, 1);
});

test('Prepare filter text - Should replace å, ä, ö and -', () => {
    // Arrange
    const numberOfTextsToTest = 3;
    const TEXTS = {
        1: {
            FILTER_TEXT: 'överkalix',
            FILTER_TEXT_EXPECTED: 'overkalix'
        },
        2: {
            FILTER_TEXT: 'the-baseball field',
            FILTER_TEXT_EXPECTED: 'the baseball field'
        },
        3: {
            FILTER_TEXT: 'räksmörgås',
            FILTER_TEXT_EXPECTED: 'raksmorgas'
        }
    }

    let counter = 1;
    while (counter < numberOfTextsToTest) {
        // Act
        const result = prepareFilterText(TEXTS[counter].FILTER_TEXT);
        // Assert
        expect(result).toBe(TEXTS[counter].FILTER_TEXT_EXPECTED);
        counter++;
    }
});
