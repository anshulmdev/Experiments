const Bank = require('./Bank')

class HDFC extends Bank {
  processPayments() {
    return `Amount of Rs ${this.amount} is processed in Account: ${this.account}`
  }
  processRefund() {
    return `Amount of Rs ${this.amount} is refunded in Account: ${this.account}`
  }
}


module.exports = HDFC