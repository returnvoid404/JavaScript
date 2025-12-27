// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2 != 1);

console.log(2=='2'); //loose comparison (checks only value)
console.log(2==='2'); //strict comparison (checks value and type)

console.log("2" > 1); //loose comparison (JS converts string to number and then compares)
console.log("2" > "12"); //loose comparison (compares lexicographically)

console.log( null == undefined ); //loose comparison (both null and undefined are considered equal)
console.log( null === undefined ); //strict comparison (different types)

console.log( null >= 0 ); //true (null is converted to 0)
console.log( null > 0 ); //false (null is converted to 0)
console.log( null == 0 ); //false (null is only equal to undefined)

console.log( undefined >= 0 ); //false (undefined is converted to NaN)
console.log( undefined > 0 ); //false (undefined is converted to NaN)
console.log( undefined == 0 ); //false (undefined is only equal to null)

// Summary:
// 1. Use strict comparison (===) to avoid unexpected type coercion.
// 2. null is equal to undefined only.
// 3. null is converted to 0 in relational comparisons, but not equal to 0.
// 4. undefined is converted to NaN in relational comparisons, and not equal to anything except null.