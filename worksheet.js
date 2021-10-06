const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// NOTE: run this file using terminal command: nodemon worksheet.js

//***MAP***
//1. Get array of all names
const names = characters.map(char => {
    return char.name;
});
// console.log(names);

//2. Get array of all heights (Decoupled example)
const heights = characters.map((char) => char.height);
// console.log(heights);

//3. Get array of objects with just name and height properties (Implicit return that creates a new array of objects)
const minifiedRecords = characters.map((char) => ({
    name: char.name,
    height: char.height,
}));
// console.log(minifiedRecords);

//4. Get array of all first names (normal map, splitting on the first space and getting the first part of the split and adding it to the firstNames array)
const firstNames = characters.map((char) => char.name.split(' ')[0]);
// console.log(firstNames);


//***REDUCE***  (accumulator pattern)
    // reduce takes 2 things, a callback function, and a starting point [in this case 0]
    // acc = accumulator | cur = current value
    // so on the first run through, acc = 0 based off the initial value set after the callback function

    //1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => {
    return acc + cur.mass;
}, 0);
// console.log(totalMass);

//2. Get total height of all characters
    // when there is a single return, you can turn it into a single line with shorthand. This replaces the return statement and the brackets from the above example
const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0);
// console.log(totalHeight);

//3. Get total number of characters by eye color
    // true goal is have this return a key/value pair of [eye_color]: {# of chars with it}
    // By giving it an initial value of an empty object {} will make the return be a key/value pair
    // The if statement is checking to see if the key of the accumulator of the specified eye color already exits or not.  If it exits add to the value, if not the value is 1
const charByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if ( acc[color] ) {
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {});
// console.log(charByEyeColor);

//4. Get total number of characters in all the character names
const totalNameChars = characters.reduce((acc, cur) => acc + cur.name.length, 0);
// console.log(totalNameChars);



//***FILTER***
    // take an array of items and separate them into a new array based off of a filter

//1. Get characters with mass greater than 100 [darth vader]
const greater100Chars = characters.filter(char => {
    return char.mass > 100;
})
// console.log(greater100Chars);

//2. Get characters with height less than 200 [luke, leia, anakin]
const shorterThan200 = characters.filter((char) => char.height < 200);
// console.log(shorterThan200);

//3. Get all male characters [luke, darth, anakin]
const allMaleChars = characters.filter((char) => char.gender === 'male');
// console.log(allMaleChars);

//4. Get all female characters [leia]
const allFemaleChars = characters.filter((char) => char.gender === 'female');
// console.log(allFemaleChars);


//***SORT***
    // Sort is a compare function that compares 'a' - 'b' 
    // takes in an array and re-organizes their indexes to be sorted by a specified paramater
    // if the result of the return is negative, a is sorted before b.  if the return is positive, b is sorted before a.  If the return is 0 then the result set remains the same

//1. Sort by mass [ASC]
const byMass = characters.sort((a, b) => {
    return a.mass - b.mass;
})
// console.log(byMass);

//2. Sort by height [ASC]
    // you can do a shorthand return if its a single return.  This will remove the return and the braces {}
const byHeight = characters.sort((a, b) => a.height - b.height);
// console.log(byHeight);

//3. Sort by name [alphabetical]
    // b/c this is a string you cant just subtract a from b.  so in this case we need to define the return values with an if statement.
    // so in this case the sort is looking at 2 names the current name |a| and the next name |b|
        // if |a| is less than |b| we're returning -1 else we return 1 (shorthand if/else below)        
const byName = characters.sort((a, b) => {
    if ( a.name < b.name ) return -1;
    return 1;
});
// console.log(byName);

//4. Sort by gender [famales first]
    // similar example from above, this time we're checking the gender and if it matches 'male' we push them further down the return
const byGender = characters.sort((a, b) => {
    if ( a.gender === 'male' ) return 1;
    return -1;
})
// console.log(byGender);



//***EVERY***
    // give a condition and check every index for that condition.  returns a boolean

//1. Does every character have blue eyes? [false]
const allBlueEyes = characters.every((char) => {
    return char.eye_color === 'blue';
})
// console.log(allBlueEyes);

//2. Does every character have mass more than 40? [true]
const allMoreThan50 = characters.every((char) => char.mass > 40);
// console.log(allMoreThan50);

//3. Is every character shorter than 200? [false]
const allShorterThan200 = characters.every((char) => char.height < 200);
// console.log(allShorterThan200);

//4. Is every character male? [false]
const allMale = characters.every((char) => char.gender === 'male');
// console.log(allMale);


//***SOME***
    // Checks to see if at least 1 item in an array meets a condition returns as boolean
    // takes in a single callback function

//1. Is there at least one male character?
const oneMaleChar = characters.some((char) => {
    return char.gender === 'male';
})
// console.log(oneMaleChar);

//2. Is there at least one character with blue eyes?
    // shorthand version when there is a single implicit return
const oneBlueEye = characters.some((char) => char.eye_color === 'blue');
// console.log(oneBlueEye);

//3. Is there at least one character taller than 210?
const oneTallerThan210 = characters.some((char) => char.height > 210);
// console.log(oneTallerThan210);

//4. Is there at least one character that has mass less than 50?
const oneLessThan50 = characters.some((char) => char.mass < 50);
// console.log(oneLessThan50);





// Remove duplicates from array
const tyArray = [1, 2, 1, 5, 2, 1, 6, 3, 6, 7, 2];

const removeDuplicates = tyArray.filter((num, index, self) => {
    return index == self.indexOf(num);    
})
// console.log(removeDuplicates);

let newArray = [];
for ( let i = 0; i < tyArray.length; i++ ) {
    if ( newArray.indexOf(tyArray[i]) == -1 ) {
        newArray.push(tyArray[i]);
    }
}
// console.log(newArray);


