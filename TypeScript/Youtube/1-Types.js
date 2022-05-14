// https://www.youtube.com/watch?v=LKVHFHJsiO0&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n&ab_channel=JackHerrington
// DataTypes and Checking
var sampleBoolean = true;
var sampleRegex = /\n/;
var sampleArray = [1, 2, 3, 4, 5, 'string'];
sampleArray.push('String2'); // -> Will Work
var sampleArray2 = [1, 2, 3, 4, 5];
// sampleArray2.push('aa') // -> Thows Error
// Utility
var ids = {
    10: "Ten",
    20: "Twenty"
};
ids[30] = "Thirty";
console.log(ids);
