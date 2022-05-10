const Payments = require('../Strategy/Modules/Payment');
const Chase = require('./Chase');
const HDFC = require('./HDFC');


const payment = new Payments();
console.log(payment)

console.table({
  "Chase Credited": new Chase(140, "38592957823"),
  "Chase Refunded": new Chase(10, "38592957823"),
  "HDFC Credited": new HDFC(340, "2859380593"),
  "HDFC Refunded": new HDFC(39, "2859380593"),
})