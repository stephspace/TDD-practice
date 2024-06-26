const capital = require('./capital');

test('Capitalize john to John', () => {
    expect(capital('john')).toBe('John');
});

test('hello World to Hello World', () => {
    expect(capital('hello World')).toBe('Hello World');
});

test('practice to Practice', () => {
    expect(capital('practice')).toBe('Practice');
});