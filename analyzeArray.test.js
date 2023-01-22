import analyzeArray from "./analyzeArray";

test('returns an object', () => {
    expect(typeof analyzeArray([1, 2, 3])).toBe('object');
    expect(Array.isArray(analyzeArray([1, 2, 3]))).toBeFalsy();
    expect(analyzeArray([1, 2, 3])).not.toBeNull();
    // Actually need to check date object too
});

test('average is correct', () => {
    expect(analyzeArray([1,8,3,4,2,6])['average']).toBe(4);
    expect(analyzeArray([0,2,4,6])['average']).toBe(3);
});

test('min is correct', () => {
    expect(analyzeArray([1,8,3,4,2,6])['min']).toBe(1);
    expect(analyzeArray([0,2,4,6])['min']).toBe(0);
});

test('max is correct', () => {
    expect(analyzeArray([1,8,3,4,2,6])['max']).toBe(8);
    expect(analyzeArray([0,2,4,6])['max']).toBe(6);
});

test('length is correct', () => {
    expect(analyzeArray([1,8,3,4,2,6])['length']).toBe(6);
    expect(analyzeArray([0,2,4,6])['length']).toBe(4);
});

test('returned object is correct', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      });
      expect(analyzeArray([0,2,4,6])).toEqual({
        average: 3,
        min: 0,
        max: 6,
        length: 4
      });
});

test('array contains non-numbers', () => {
    expect(() => analyzeArray([1, "test", 3])).toThrow();
});

test('empty array', () => {
    expect(analyzeArray([])).toEqual({
        average: null,
        min: null,
        max: null,
        length: 0
      });
});