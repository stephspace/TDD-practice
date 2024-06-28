const caesarcipher = require('./caesarcipher');

test('xyz to abc', () => {
    expect(caesarcipher('xyz', 3)).toBe('abc');
});

test('HeLLo to KhOOr', () => {
    expect(caesarcipher('HeLLo', 3)).toBe('KhOOr');
});

test('Hello, World! to Khoor, Zruog!', () => {
    expect(caesarcipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

