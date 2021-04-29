const { randomizer, colorRandomizer, fontRandomizer, formatInformationRenderIcon, formatInformationRenderText } = require("./microComponentsHelper")
const STRING_FORMAT = '7" vinyl';
const STRING_EXPECTED_ICON = 'record-vinyl';
const STRING_EXPECTED_TEXT = '7" vinyl /';
const STRING_ICON_DEFAULT = 'compact-disc';
const STRING_UNEXPECTED = 'Poo foo yoo';
const STRING_UNEXPECTED_TEXT = 'Poo foo yoo /';
const STRING_UNKNOWN = 'unknown /';

// Format information render icon tests
test('Render icon - Format string: "' + STRING_FORMAT + '" returns icon string: "' + STRING_EXPECTED_ICON + '".', () => {
    expect(formatInformationRenderIcon(STRING_FORMAT)).toBe(STRING_EXPECTED_ICON);
});
test('Render icon - Missing format returns default icon string: "' + STRING_ICON_DEFAULT + '".', () => {
    expect(formatInformationRenderIcon()).toBe(STRING_ICON_DEFAULT);
});
test('Render icon - Unexpected format returns default icon string.', () => {
    expect(formatInformationRenderIcon(STRING_UNEXPECTED)).toBe(STRING_ICON_DEFAULT);
});

// Format information render text tests
test('Render text - Format string: "' + STRING_FORMAT + '" returns text string: "' + STRING_EXPECTED_TEXT + '".', () => {
    expect(formatInformationRenderText(STRING_FORMAT)).toBe(STRING_EXPECTED_TEXT);
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
