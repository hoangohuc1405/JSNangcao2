let arr = [3, 7, 1, 9, 5, 2, 8, 4, 6, 10]

let soLonnhat = arr.reduce((max,item) => {
    if(item > max) {
        max = item
    }
    return max
})

console.log (soLonnhat)