const capitalize = require('./capitalize');

test('Capitalize john to John', () => {
    expect(capitalize('john')).toBe('John');
});

test('hello World to Hello World', () => {
    expect(capitalize('hello World')).toBe('Hello World');
});

test('practice to Practice', () => {
    expect(capitalize('practice')).toBe('Practice');
});

test("handles an empty string", () => {
    expect(capitalize("")).toBe("");
});

test("handles an empty string", () => {
    expect(capitalize("a")).toBe("A");
});
