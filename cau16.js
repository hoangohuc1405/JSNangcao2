let arr = ["Phuc", "Han", "Dung", "Han", "Tam", "Phuc"];

let disPlay = arr.reduce((soLan, item) => {
    if (!soLan[item]) {
        soLan[item]= 1;
}else {
    soLan[item]++;
}
return soLan;
}, {})

console.log(disPlay)