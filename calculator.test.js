import calculator from "./calculator";

test('add integers', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(0, 88)).toBe(88);
    expect(calculator.add(5, -15)).toBe(-10);
});

test('add floats', () => {
    expect(calculator.add(2.2, 3.3)).toBeCloseTo(5.5);
    expect(calculator.add(1, 1.3)).toBeCloseTo(2.3);
});

test('subtract integers', () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
    expect(calculator.subtract(5, 0)).toBe(5);
    expect(calculator.subtract(88, 20)).toBe(68);
});

test('subtract floats', () => {
    expect(calculator.subtract(2.5, 3.5)).toBeCloseTo(-1);
    expect(calculator.subtract(88.5, 20.0)).toBe(68.5);
});

test('divide integers', () => {
    expect(calculator.divide(10, 5)).toBe(2);
    expect(calculator.divide(15, -3)).toBe(-5);
    expect(calculator.divide(3, 2)).toBe(1.5);
});

test('divide floats', () => {
    expect(calculator.divide(3.3, 3)).toBeCloseTo(1.1);
    expect(calculator.divide(10, -3)).toBeCloseTo(-3.33333);
});

test('divide zero', () => {
    expect(calculator.divide(0, 3)).toBe(0);
    expect(calculator.divide(0, -3.3)).toBe(0);
    expect(calculator.divide(0.0, -3.3)).toBe(0);
});

test('divide by zero', () => {
    expect(() => calculator.divide(100, 0)).toThrow('zero');
    expect(() => calculator.divide(0.0, 0.0)).toThrow('zero');
});

test('multiply integers', () => {
    expect(calculator.multiply(0, 3)).toBe(0);
    expect(calculator.multiply(3, 5)).toBe(15);
    expect(calculator.multiply(10, -50)).toBe(-500);
});

test('multiply floats', () => {
    expect(calculator.multiply(0.0, 3.3)).toBe(0);
    expect(calculator.multiply(10.3, 2.0)).toBeCloseTo(20.6);
    expect(calculator.multiply(0.5, -50.6)).toBeCloseTo(-25.3);
});
