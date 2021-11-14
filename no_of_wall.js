const prompt = require('prompt-sync')();

var w = prompt("Enter width: ");
var h = prompt("Enter height: ");
var n = prompt("Enter no. of square meters: ");
function wall(w , h ,n)  {
    var area = w * h;
    
    if(area%n==0)
    return area/n;

    
    return (area/n)+1;
}
let completewall = wall(w,h,n);
console.log("the number of complete walls that I can paint :",completewall);