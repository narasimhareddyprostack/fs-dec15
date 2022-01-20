let size = [37, 39, 41, 43]
let new_Size = size.map((s) => {
    console.log(s)
    s = s + 1
    return s
})
console.log(new_Size)