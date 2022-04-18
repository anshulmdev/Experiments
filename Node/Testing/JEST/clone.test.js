const { cloneArray } = require('./clonearray');


test('Array cloning test', () => {
    expect(
        cloneArray([1,2,3,4,5])
    ).toEqual(
        [1,2,3,4,5]
    )
    expect(
        cloneArray([1,2,3,4,5])
    ).not.toBe(
        [1,2,3,4,5]
    )
})