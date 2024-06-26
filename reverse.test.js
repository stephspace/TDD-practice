const reverse = require('./reverse');

test('turns hello into olleh', () => {
    expect(reverse('olleh')).toBe('hello');
});

test('turns yako into okay', () => {
    expect(reverse('yako')).toBe('okay');
});