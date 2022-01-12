let user = { id: 101, name: 'Rahul Gandhi', email: "rahul@gmail.com" }
user.email = "Rahul@tcs.com"
user.loc = "New Delhi"
console.log(user)

delete user.loc

console.log(user)
