console.log(`JS4 Coding Assignment 1 Create an array called ages that contains the following
     values: 3, 9, 23, 64, 2, 8, 28, 93. `);

//Use let and square brackets to define the array
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log (ages);

console.log(`JS4 Coding Assignment 1a. Subtract the value of the first element from the
    value of the last element PROGRAMMATICALLY`);

//Using array.length tells us how many elements are in an array. 0 is the first, so we
//we use 0 to access the first and the last one will be the lenght of the array minus 1 
//since it starts with 0, not 1.
console.log (ages[ages.length-1] - ages[0]);

console.log(`JS4 Coding Assignment 1b Add a new age to your array and repeat the step
     above to ensure it is dynamic. `);

//array.push adds an element to the end of an array. Repeating the code above still subtracts
//the first element from the last element (console log shows 114)
ages.push(117);
console.log (ages[ages.length-1] - ages[0]);

console.log(`JS4 Coding Assignment 1c Use a loop to iterate through the array and calculate
     the average age. `);

//Use a "for" loop and create a variable "sum" to keep adding the elements of the array
//until the the count hits the length of the array and then create a new variable to divide
//the variable that is the sum off all the numbers in the array by the the number of 
//elements (length) within the array

let sum = 0;

for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}

let average = sum / ages.length; 

console.log(average);

console.log(`JS4 Coding Assignment 2 Create an array called names that contains the following values:
     'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.  `);

//Use let and square brackets to define the array

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

console.log(`JS4 Coding Assignment 2a Use a loop to iterate through the array and calculate the 
    average number of letters per name.  `);

//Use a "for" loop in a similar manner as getting the average number but count the letters in each element
//instead using "length" with the name string and adding them to a new variable to hold the sum

let sumLetters = 0;

for (let i = 0; i < names.length; i++) {
    sumLetters += names[i].length;
}

//Apply the calculation (a sum of all the counted letters divided by the number of elements in the name array)
let averageLetters = sumLetters / names.length;

console.log(averageLetters);

console.log(`JS4 Coding Assignment 2b Use a loop to iterate through the array again
     and concatenate all the names together, separated by spaces.  `);

//I'll use the same loop, create a variable for the string of names and use template
//  literal for a fast way to concatenate (without having to use + and quotes)

let allNames = "";

for (let i = 0; i < names.length; i++) {
    allNames += `${names[i]} `;
}

console.log (allNames);

console.log(`JS4 Coding Assignment 3 How do you access the last element of any array?  `);

console.log(`JS4 Coding Assignment 3 ANSWER: array[array.length -1]
    Since arrays start at index 0, you use the length of the array and subtract 1 to 
    access the last element.`)

console.log(`JS4 Coding Assignment 4 How do you access the first element of any array?  `);

console.log(`JS4 Coding Assignment 4 ANSWER: array[0]
    Since arrays start at 0, the first element will always be accessed using array[0]. `)

console.log(`JS4 Coding Assignment 5 Create a new array called nameLengths. Write a loop
     to iterate over the previously created names array and add the length of each name
      to the nameLengths array.   `);
//This can be done in a similar manner to question 2, but pushing the length to the array
//rather than summing the number of letters
let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths.push (names[i].length);
}

console.log(nameLengths);

console.log(`JS4 Coding Assignment 6 Write a loop to iterate over the nameLengths array
     and calculate the sum of all the elements in the array.  `);
//Now I need cycle through nameLength array instead of names array and add up the values
//of the elements in nameLength array, putting the value in a new variable

let nameLengthsSum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    nameLengthsSum += (nameLengths[i]);
}

console.log(nameLengthsSum);

console.log(`JS4 Coding Assignment 7 Write a function that takes two parameters, word 
    and n, as arguments and returns the word concatenated to itself n number of times.
     (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').  `);

//The new function is given a name and the parameters are placed in parentheses. A variable is created
// to hold the word we want to repeat and a for loop is used to repeat that word "n" number of times.
function concatWord (word, n) {
    let wordRepeat = "";
    for (let i = 0; i < n; i++) {
        wordRepeat += word;
    }
    return wordRepeat
}

console.log(concatWord("Hello", 3));
console.log(concatWord("Heather", 7));
console.log(concatWord("Woot",10));

console.log(`JS4 Coding Assignment 8 Write a function that takes two parameters, 
    firstName and lastName, and returns a full name. The full name should be the first 
    and the last name separated by a space.
 `);

 /*The new function is given a name and the parameter are placed in parentheses. A new variable is created
 and a template literal is used within the function as a shorter way of concantenating the name. We need to return
 the new variable within the function to make the name display when the function is called. */
function fullName (firstName, lastName) {
    let fullNameString = (`${firstName} ${lastName}`);
    return fullNameString;
}

console.log(fullName("Heather", "Yarbrough"));
console.log(fullName("Babe", "Ruth"));
console.log(fullName("Janis", "Joplin"));

console.log(`JS4 Coding Assignment 9 Write a function that takes an array of numbers
     and returns true if the sum of all the numbers in the array is greater than 100.
 `);

/*The function will take the numbers array as a parameter (so I don't need to define
numbers array ahead of time). Loop through the array to sum all numbers. An if statement
needs to be used to compare the total to 100. I added an else statement to return False instead of undefined.*/

 function greaterThanHundred (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
       sum += numbers[i];
    }
        if (sum > 100) {
        return true;
        } else {
          return false;
        }
 }

 console.log(greaterThanHundred([4, 8, 20, 3, 6]));
 console.log(greaterThanHundred([52, 97]));
 console.log(greaterThanHundred([23, 41, 97, 2, 11, 36]));
 console.log(greaterThanHundred([12, 33, 7, 2, 8]));

 console.log(`JS4 Coding Assignment 10 Write a function that takes an array of numbers 
    and returns the average of all the elements in the array.
`);

/*Give the function a name and name the array that it will use in parentheses. A variable is created
to hold the total of the numbers as it loops through the number of elements in the array. That variable 
gets divided by the number of elements in the array (counted by using "length") and a new vairable is 
returned so that the average is displayed when the function is called*/

function averageElements (numbers) {
    let sumNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumNumbers += numbers[i];
    }
    let averageNumbers = sumNumbers / numbers.length;
    return averageNumbers;
}
console.log(averageElements([2,5,9,32,7]));
console.log(averageElements([22, 33, 44, 55, 66]));
console.log(averageElements([100, 200, 300]));

console.log(`JS4 Coding Assignment 11 Write a function that takes two arrays of numbers 
    and returns true if the average of the elements in the first array is greater than 
    the average of the elements in the second array.
`);
//Create the function and pull in two arrays 
function firstGreaterThanSecond (firstArray, secondArray) {
//Each array needs to have a separate sum, so a for loop is used on each to add up the elements of each.
    let firstSum = 0; 
    for (let i = 0; i < firstArray.length; i++) {
        firstSum += firstArray[i];
    }
    let secondSum = 0;
    for (let i = 0; i < secondArray.length; i++) {
        secondSum += secondArray[i];
    }
//Once we have the sum of each array we can find the average of each by creating two new variables and 
//divide the sum by the number of elements (length) in each respective array
    let firstAverage = firstSum / firstArray.length;
    let secondAverage = secondSum / secondArray.length;

//Use an if/elese statement to return true if the first is greater than the second or false if not.
    if (firstAverage > secondAverage) {
        return true;
    } else {
        return false;
    }
}

console.log(firstGreaterThanSecond([1, 3, 9, 29], [1, 4, 8, 3]));
console.log(firstGreaterThanSecond([200, 300, 400, 500], [100, 200, 300, 400]));
console.log(firstGreaterThanSecond([2, 4, 6], [3, 5, 7]));
console.log(firstGreaterThanSecond([12, 43, 97, 29], [13, 44, 98, 30]));

console.log(`JS4 Coding Assignment 12 Write a function called willBuyDrink that
     takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it
      is hot outside and if moneyInPocket is greater than 10.50.
`);

//Use an if else statement and "&&" to check to see if both requirements are met
function willBuyDrink (isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        return true; 
    } else {
        return false;
    }
}

console.log(willBuyDrink(true, 12.25));
console.log(willBuyDrink(false, 15.00));
console.log(willBuyDrink(true, 8.50));


console.log(`JS4 Coding Assignment 13 Create a function of your own that solves a problem.
     In comments, write what the function does and why you created it.

`);

/*This function determines whether we should bid on a house, taking 3 things into consideration:
if the asking price is more than our budget, if it needs a new roof, and if the property 
taxes are more than our budget. An if/else statmement is used and "&&" is used to check if all 
three requirements are met. */
function bidOnHouse (askingPrice, needsRoof, propertyTaxes) {
    if (askingPrice < 400000 && needsRoof === false && propertyTaxes < 5000) {
        return "Bid on the house!";
    } else {
        return "The house costs too much overall."
    }
}

console.log(bidOnHouse (395000, false, 4000));
console.log(bidOnHouse (375000, true, 3500));
console.log(bidOnHouse (450000, false, 4000));