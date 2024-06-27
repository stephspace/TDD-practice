const calculator = require('./calculator');

test('2 + 2 equals 4', () => {
    expect(calculator.add(2,2)).toBe(4);
});

test('2 - 2 equals 4', () => {
    expect(calculator.substract(2,2)).toBe(0);
});

test('2 / 2 equals 1', () => {
    expect(calculator.divide(2,2)).toBe(1);
});

test('2 * 2 equals 4', () => {
    expect(calculator.multiply(2,2)).toBe(4);
});