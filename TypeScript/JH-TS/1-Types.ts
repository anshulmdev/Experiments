// https://www.youtube.com/watch?v=LKVHFHJsiO0&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n&ab_channel=JackHerrington


// DataTypes and Checking


const sampleBoolean: Boolean = true;
const sampleRegex: RegExp = /\n/;
const sampleArray: (string|number)[] = [1,2,3,4,5, 'string'];

sampleArray.push('string2'); // -> Will Work

const sampleArray2: number[] = [1, 2, 3, 4, 5]
// sampleArray2.push('aa') // -> Thows Error

// Utility
const ids: Record<number, string> = {
    10: "Ten",
    20: "Twenty"
}
ids[30] = "Thirty";
console.log(ids)

// Object Type

const out = [1,2,3].map((v) => v**2);
const out2 = [1,2,3].map((v) => `${v**2}`);
//const out3: number[] = [1,2,3].map((v) =>`${v**2}`); // Throws Error


