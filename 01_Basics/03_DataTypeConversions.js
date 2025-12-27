let score = "33";
console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber); //Gives Number

score = "33abc";
valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber); //Gives Nan


score = null;
valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber); //Gives 0


score = undefined;
valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber); //Gives Nan



score = true;
valueInNumber = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber); //Gives 1


let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //Gives True


isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //Gives False


isLoggedIn = "Sami";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //Gives True

console.log(2**2); //Exponentiation Operator


console.log( 1 + "2" ); //String Concatenation
console.log( "1" + 2 ); //String Concatenation
console.log( 1 + 2 + "3" ); //String Concatenation
console.log( "1" + 2 + 3 ); //String Concatenation

console.log( Number("1") + 2 ); //Number Addition
console.log( 1 + 2 + "2"); // Output 32

// Whenever there is a string appearing first in addition, JS converts everything to string and performs concatenation.
// But in other arithmetic operations like -,*,/ it converts everything to number and performs the operation.

console.log( "6" / "2" ); //Gives 3
console.log( "6" * "2" ); //Gives 12
console.log( "6" - "2" ); //Gives 4
console.log( "6" - 2 );   //Gives 4

console.log( "6" + "2" ); //Gives 62 (String Concatenation)

