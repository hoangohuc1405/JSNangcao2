let arr = ["apple1", "banana", "cherry3", "date5", "fig", "grape2"];

let chuoiKhongso = arr.filter(str => str =  !/\d/.test(str) )

console.log(chuoiKhongso)