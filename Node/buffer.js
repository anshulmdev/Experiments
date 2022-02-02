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

// Encoding

const bufEncode1 = Buffer.from('Sample Statement', 'utf-8')
const bufEncode2 = bufEncode1.toString('base64')

// Decoding
const bufDecode1 = Buffer.from(bufEncode2, 'base64')
const bufDecode2 = bufDecode1.toString('utf-8')


// Activate:
// console.table({bufEncode1, bufDecode1});
// console.table({bufEncode2, bufDecode2});
