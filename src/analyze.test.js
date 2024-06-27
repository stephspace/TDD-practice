const analyzeArray = require('./analyzearray');

test('average of [1,8,3,4,2,6] is 4',() => {
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
});

test('min of [1,8,3,4,2,6] is 1',() => {
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
});

test('max of [1,8,3,4,2,6] is 8',() => {
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
});

test('length of [1,8,3,4,2,6] is 6',() => {
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);
});