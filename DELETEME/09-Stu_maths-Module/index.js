var math = require("./math.js");

// console.log(math.math());

var operation = process.argv[2];
var numOne = parseInt(process.argv[3]);
var numTwo = parseInt(process.argv[4]);

switch (operation) {
  case "sum":
    math.sum(numOne, numTwo);
    break;
  case "sub":
    math.sub(numOne, numTwo);
    break;
  case "mult":
    math.mult(numOne, numTwo);
    break;
  case "divide":
    math.divide(numOne, numTwo);
    break;
  default:
    console.log("enter a valid operation");
}
