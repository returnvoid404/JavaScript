//Primiitive Data Types in JavaScript
//1. Number
//2. String
//3. Boolean
//4. Undefined
//5. Null
//6. Symbol
//7. BigInt

//1. Number
const numVar = 42309;

//2. String
const stringVar = "This is a string";

//3. Boolean
const booleanVar = true; //or false

//4. Undefined
let undefinedVar; //by default assigned undefined

//5. Null
const nullVar = null;

//6. Symbol
const symbolVar = Symbol("This is a symbol");

//7. BigInt
const numberVar = 4230928109382132910n;
//Note: BigInt is created by appending 'n' at the end of an integer literal

//Summary of Data Types
console.log( typeof numVar ); //number
console.log( typeof stringVar ); //string
console.log( typeof booleanVar ); //boolean
console.log( typeof undefinedVar ); //undefined
console.log( typeof nullVar ); //object (this is a known quirk in JavaScript)
console.log( typeof symbolVar ); //symbol
console.log( typeof numberVar ); //bigint

//Note: Use 'typeof' operator to check the data type of a variable

//Important Points:
//1. JavaScript is dynamically typed language, so variable types are determined at runtime.
//2. 'null' is considered an object type due to legacy reasons, but it represents the absence of any value.
//3. BigInt is used for integers larger than 2^53 - 1, which is the largest number JavaScript can reliably represent with the Number type.

//Non-Primitive Data Types
//1. Object
//2. Array
//3. Function

//1. Object
const objectVar = { name: "John", age: 30 };

//2. Array
const arrayVar = [1, 2, 3, 4, 5];

//3. Function
const functionVar = function() { console.log("This is a function"); };

//Summary of Non-Primitive Data Types
console.log( typeof objectVar ); //object
console.log( typeof arrayVar ); //object (arrays are a type of object)
console.log( typeof functionVar ); //function

//Important Points:
//1. Objects are collections of key-value pairs.
//2. Arrays are ordered collections of values.
//3. Functions are callable objects that can be executed.

//Type Conversion Summary
//1. Number to String: Use String(value) or value.toString()
//2. String to Number: Use Number(value) or parseInt(value)/parseFloat(value)
//3. Boolean to Number: true -> 1, false -> 0
//4. Number to Boolean: 0 -> false, any other number -> true
//5. String to Boolean: Non-empty string -> true, empty string -> false

//This concludes the summary of data types in JavaScript.
