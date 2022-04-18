const assert = require('assert');
const sortArray = require('./sort');

const result = sortArray([5,4,7,2,8,9,10]);
const expected = [2,4,5,7,8,9,10];

assert.deepEqual(result, expected, 'Sorting not working');