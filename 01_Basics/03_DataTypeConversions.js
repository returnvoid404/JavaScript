/*
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
*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //Gives True


isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //Gives False


isLoggedIn = "Sami";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); //Gives True
