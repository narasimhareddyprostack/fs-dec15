class Bank {
    constructor(a) {
        this.acc_Address = a;
    }
}
class Savings_Account extends Bank {
    constructor(id, name, address) {
        super(address)
        this.acc_Id = id;
        this.acc_Name = name

    }
}
let c1 = new Savings_Account(101, "Rahul", 'New Delhi')
console.log(c1)