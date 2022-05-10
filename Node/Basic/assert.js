// const assert = require('assert');
const assert = require('assert/strict');


const assert = require('assert/strict');

// Example 1:
const a = 9;
const b = 10;

try{ assert(a > b) }
catch(e) { console.log('Example 1: ', e.message) }

// Example 2:

const varA = ['1', 2];
const varB = [1 , 2];

try{ assert.deepEqual(varA, varB) }
catch(e) { console.log('Example 2: ', e.message) }
try{ assert.deepEqual(varA, varB) }
catch(e) { console.log('Example 3: ', e.message) }

// Example 3:

const expA = [[[1, 2, 3]], 4, 5];
const expB = [[[1, 2, '3']], 4, 5];

try{ assert.deepEqual(expA, expB) }
catch(e) { console.log('Example 3: ', e.message) }
