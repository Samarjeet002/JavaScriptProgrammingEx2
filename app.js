/*
    JavaScript Programing Exercise @
    Strings and string functions
    Samarjeet
*/
let I = "~~~~~~~~~~";
let firstName = "Samarjeet";
let lastName = "Samarjeet";
let age = 18;
console.log(I);
//Concatenation
let messageConacatenation = 'My name is '+ firstName +' '+ lastName +' and my age is '+ age;
console.log(messageConacatenation);
console.log(I);
// String Template/Template Literals
let messageStringLiteral = 'My name is ${firstName} ${lastName} and my age is ${age}';
console.log(messageStringLiteral);
console.log(I);
//Escape & New Line
let a = "Add a new line\nThis is a new line";
console.log(a);
console.log(1);
let b = "I quoted the person as saying \"I love JavaScript\".";
console.log(b);
console.log(I);
let c = 'It\'s right over there.';
console.log(c);
console.log(I);
let d = 'I quoted the person as saying "I love Javascript".';
console.log(d);
console.log(I);
let e = "It's right over there.";
console.log(e);
console.log(I);
console.log("String Functions");
let f = "abcdefg";
// Length of f
console.log(`Lenght of f - ${f.length}`);
//toUpper
f = f.toUpperCase();
console.log(f);
//toLower
f = f.toLowerCase();
console.log(f);
//substr
let g = f.substr(2, 4);
console.log(g);
//substring
let h = f.substring(3);
console.log(h);
//indexOf
let index = f.indexOf("c");
console.log(index);





