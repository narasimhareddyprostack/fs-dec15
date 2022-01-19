class Parent {
    constructor() {
        console.log("Parent - class : Constr");
    }
    getAddress() {
        console.log("Parent Class - GetAddress method")
    }
}
class Child extends Parent {
    constructor() {
        super()
        console.log("Child - class : Const")
    }
    getAddress() {
        console.log("Child Class - GetAddress method")
    }
}
let c1 = new Child()
c1.getAddress()