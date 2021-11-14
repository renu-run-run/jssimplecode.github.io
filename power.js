const prompt = require('prompt-sync')();

var V = prompt("Enter voltage: ");
var I = prompt("Enter current: ");
function power(v,I)  {
    return v * I;
}
let p = power(V,I);
console.log("power :",p);