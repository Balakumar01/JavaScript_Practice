
// JavaScript - Variables (Day 1)

// 1. Variable Declaration
console.log("1. Variable Declaration");

let a = 5;
console.log(a);


// 2. const - Cannot Reassign
console.log("\n2. const - Cannot Reassign");

const country = "India";
console.log(country);

// country = "USA"; // Uncomment to see the error


// 3. var - Reassignment
console.log("\n3. var - Reassignment");

var x = 10;
x = 20;
console.log(x); // 20


// 4. var - Redeclaration
console.log("\n4. var - Redeclaration");

var price = 100;
var price = 300;
console.log(price); // 300


// 5. let - Reassignment
console.log("\n5. let - Reassignment");

let age = 25;
age = 26;
console.log(age); // 26


// 6. let - Declaration and Assignment
console.log("\n6. let - Declaration and Assignment");

let number;
number = 10;
console.log(number); // 10


// 7. let - Redeclaration Not Allowed
console.log("\n7. let - Redeclaration");

// let marks = 50;
// let marks = 90; // Uncomment to see the error


// 8. Inside and Outside Block - var
console.log("\n8. var - Block Scope");

if (true) {
    var first = 100;
}
console.log(first); // 100


// 9. Inside and Outside Block - let
console.log("\n9. let - Block Scope");

if (true) {
    let second = 200;
}
 // console.log(second); // Uncomment to see the error


// 10. Assigning One Variable to Another
console.log("\n10. Assigning Variables");

let a1 = 50;
let b1 = a1;

console.log(a1); // 50
console.log(b1); // 50


// 11. String + Number
console.log("\n11. String + Number");

let message = "Hello";
let value = 10;

console.log(message + value); // Hello10
