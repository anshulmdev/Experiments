const { sum } = require('./sum');

test('Properly Add two numbers', () => {
    expect(sum(1,2)).toBe(3)
})

test('Properly Add two numbers', () => {
    expect(sum(10,45)).toBe(55)
})