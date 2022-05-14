// https://www.youtube.com/watch?v=LKVHFHJsiO0&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n&ab_channel=JackHerrington


// DataTypes and Checking


const sampleBoolean: Boolean = true;
const sampleRegex: RegExp = /\n/;
const sampleArray: (string|Number)[] = [1,2,3,4,5, 'string'];

sampleArray.push('String2'); // -> Will Work

const sampleArray2: Number[] = [1, 2, 3, 4, 5]
sampleArray2.push('aa') // -> Thows Error


