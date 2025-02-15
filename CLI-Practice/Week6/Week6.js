function numProduct(num) {
    return num * num;
}

let num = 12;

console.log(numProduct(num));


function power(x, y) {
    return x ** y;
}

let x = 4;
let y = 3;

console.log(power(x,y));

let list = ["Eddie", "Sarah", "Nick", "Jessica", "Olivia"];

console.log(list["4"]);

var fs = require("fs");
var input = fs.readFileSync(process.stdin.fd, "utf-8").trim().split("\n");
var a = input[0];
var b = input[1];
var c = input[2];
var d = input[3];

let studentList = [a, b, c, d];
/*** DO NOT CHANGE THE CODE ABOVE THIS LINE ***/

// WRITE YOUR CODE HERE 

studentList.push("Mary");


/*** DO NOT CHANGE THE CODE BELOW THIS LINE ***/
function checkArray(){
    return studentList;
}
console.log(checkArray());