class Bank {
    constructor (amount, account) {
      this.amount = amount;
      this.account = account
    }
    pay () {
      return this.processPayments()
    }
    refund () {
      return this.processRefunds()
    }
  }
  
  
  module.exports = Bank