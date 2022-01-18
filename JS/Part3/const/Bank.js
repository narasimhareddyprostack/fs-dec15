class Bank {
    acc_id;
    acc_Name;
    constructor(a, b) {
        this.acc_id = a;
        this.acc_Name = b
    }
    open_Account() {
        // console.log(this.acc_Name, "Account Opened Successfully");
        console.log(`${this.acc_Name} - Account Opened Successfully and Acc Id: ${this.acc_id}`);
    }
}
let c1 = new Bank(101, 'Rahul Gandhi');
//console.log(c1)
c1.open_Account()

let c2 = new Bank(102, 'Sonia Gandhi')
//console.log(c2)
c2.open_Account();