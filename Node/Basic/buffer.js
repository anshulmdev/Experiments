const { Buffer } = require('buffer');

// Example 1:
// Buffer.alloc(size, fill, encoding)
const buf1 = Buffer.alloc(20, 10, 'base64')
const buf2 = Buffer.from([1, 2, 3]);
const buf3 = Buffer.from('Github Experiments', 'latin1');
const buf4 = Buffer.from('Github Experiments', 'utf8');

// Note 1: Node.js buffers accept all case variations of encoding strings that they receive. For example, UTF-8 can be specified as 'utf8', 'UTF8' or 'uTf8'

// Activate:
// console.table({buf1, buf2, buf3, buf4})

// Example 2:

const bufEncode1 = Buffer.from('Sample Statement', 'utf-8')
const bufDecode1 = bufEncode1.toString('base64')

const bufEncode2 = Buffer.from(bufDecode1, 'base64')
const bufDecode2 = bufEncode2.toString('utf-8')

// Activate:
// console.table({bufEncode1, bufEncode2});
// console.table({bufDecode1, bufDecode2});
