import reverseString from "./reverseString";

test('reverse a string of letters only', () => {
    expect(reverseString('abcde')).toBe('edcba');
});

test('string with symbols', () => {
    expect(reverseString('* 123 *')).toBe('* 321 *');
    expect(reverseString('    ')).toBe('    ');
});

test('empty string', () => {
    expect(reverseString("")).toBe("");
});