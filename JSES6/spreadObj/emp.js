let user = { name: "Rahul Gandhi", age: 50 }
let details = { loc: "New Delhi" }

let user_Details = { ...user, ...details }
console.log(user_Details)