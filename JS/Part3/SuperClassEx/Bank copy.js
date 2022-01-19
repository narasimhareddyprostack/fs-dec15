class Bank {
    constructor() {
        console.log("Bank Class -  Const")
    }
}
class Savings_Account extends Bank {
    constructor() {
        super()
        console.log("Savings Account -  Const")
    }
}
new Savings_Account()
