let user = { name: "Rahul", age: 50, email: "Rahul@gmail.com" }
let emp = { sal: 45000, email: "Rahul@tcs.com" }

let new_Emp = { ...user, ...emp }
console.log(new_Emp)