const { randomizer, colorRandomizer, fontRandomizer, formatInformationRenderIcon, formatInformationRenderText } = require("./microComponentsHelper");
const {FORMAT} = require("../../constants/strings");
const STRING_UNEXPECTED = 'Poo foo yoo';
const STRING_UNEXPECTED_TEXT = 'Poo foo yoo /';
const STRING_UNKNOWN = 'unknown /';

// Format information render icon tests
test('Render icon - Format string: FORMAT[X].FORMAT returns icon string: FORMAT[X].ICON', () => {
    // Arrange
    const numberOfFormatsToTest = 4;
    let counter = 1;
    while (counter < numberOfFormatsToTest) {
        // Act
        const result = formatInformationRenderIcon(FORMAT[counter].FORMAT)
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

// Format information render text tests
test('Render text - Format string: FORMAT[X].FORMAT returns text string: FORMAT[X].FORMAT.', () => {

    // Arrange
    const numberOfFormatsToTest = 4;
    let counter = 1;
    while (counter < numberOfFormatsToTest) {
        // Act
        const result = formatInformationRenderText(FORMAT[counter].FORMAT);
        // Assert
        expect(result).toBe(FORMAT[counter].FORMAT + ' /');
        counter++;
    }

});
test('Render text - Missing format returns text string: "' + STRING_UNKNOWN + '".', () => {
    expect(formatInformationRenderText()).toBe(STRING_UNKNOWN);
});
test('Render text - Unexpected format returns text string: "' + STRING_UNEXPECTED_TEXT + '".', () => {
    expect(formatInformationRenderText(STRING_UNEXPECTED)).toBe(STRING_UNEXPECTED_TEXT);
});

// Randomizer tests
test('Randomizer - Generates a random number between 1 and 5', () => {
    expect(randomizer(5, 1)).toBeLessThanOrEqual(5, 1);
});
test('Color Randomizer - Generates a random number between 1 and 16', () => {
    expect(colorRandomizer()).toBeLessThanOrEqual(16, 1);
});
test('Font Randomizer - Generates a random number between 1 and 8', () => {
    expect(fontRandomizer()).toBeLessThanOrEqual(8, 1);
});
