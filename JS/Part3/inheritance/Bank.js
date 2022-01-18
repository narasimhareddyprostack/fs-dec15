class Bank {
    min_Bal = 500
}
class Saving_Account extends Bank {

}
let s1 = new Saving_Account()
console.log(s1.min_Bal)

class Current_Account extends Bank {
    min_Bal = 25000
 }
let c1 = new Current_Account()
console.log(c1.min_Bal)