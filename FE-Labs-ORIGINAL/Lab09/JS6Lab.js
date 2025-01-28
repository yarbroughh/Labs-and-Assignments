/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript DevTools, Debugging, and Unit Tests
  FE JS6 Lab
*/

/* ----------------------------------------------------- */
// Key Term List:
// DevTools
// Chrome/FireFox/Safari/Opera/Microsoft Edge
// Debugging
// TDD (Test Driven Deployment)
// BDD (Behavior Driven Deployment)
// Mocha/Chai
// assert/expect
// describe/it/equal/to/deep
// console.table()

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*------------------------ Debugging Examples ------------------------*/
console.log(`-------------------------- 
Question 1: Debugging!`)

/** Instruction: This lab is focused on two goals: 
 *               1) Increasing competence on reading and debugging errors in the console/browser
 *                  and debugging pre-written code
 *               2) Creating tests in mocha/chai for each question
 * 
 *  
 * Note:         Debugging is the art of tackling a specific problem from every angle.
 *               
 *               Think about the expected result, and consider the possible issues;
 *               Generally:    Is my code connected correctly? Is there a typo? 
 *                             Am I using this correctly? 
 *                             What kind of data type (string/array/object etc) am I working with?
 *               
 *               Specifically: My data type is a string.. am I able to use .map() on a string?                             
 *                             
 * 
 *               Question everything. console.log() everything.
 *               Dev tools and google are your friend :)
 * 
 * Step 1: Uncomment out the code below the question including the last console.log(). 
 *         Run your code and find the error.
 * Step 2: After you've fixed the error for that question, create a test in tests.js using mocha/chai
 * 
 * 
 * DO NOT REMOVE THE LAST CONSOLE.LOG() IT IS FOR CHECKING YOUR WORK
 * The titles are a hint at the expected answer, not a solution. Read the error in your browser.
 * You are given an example problem and test.
 *
/*--------------------------------------------------------------------*/
console.log('Example Question: Add two numbers')
/* -- STEP 1: DEBUG CODE --*/

// BROKEN CODE EXAMPLE:
// function addTwoNumbers (num1,num2) {
//    num1+num2
// }

// console.log(addTwoNumbers(2,3)) // ERROR IN CONSOLE: undefined
// AFTER DEBUGGING:
function addTwoNumbers(num1, num2) {
  return `num1 + num2 is: ${num1 + num2}`
}

console.log(addTwoNumbers(2, 3)) // logs 5
/* -- STEP 2: CREATE A TEST IN tests.js -- */
/*--------------------------------------------------------------------*/
console.log(`1a: Sorted array of numbers:`)

// const arrayOfNumbers = [1, 5, 3, 2, 4]
// arrayOfNumbers = arrayOfNumbers.sort((a, b) => a - b)

// console.log(arrayOfNumbers)
/*----------------------------------------------------*/
console.log(`1b: Manage my wallet `)

// class Wallet {
//   constructor(startingMoney) {
//     this.money = startingMoney
//   }

//   addMoney(amount) {
//     money += amount
//   }

//   removeMoney(amount) {
//     money -= amount
//   }
// }

// const myWallet = new Wallet(100)
// myWallet.removeMoney(14.99)
// myWallet.addMoney(3)

// console.log(myWallet.money)
/*----------------------------------------------------*/
console.log(`1c: Day of the Week`)
//In some cases, there's no error, but you're not getting your expected result back.
//Reminder: Switch statements are a 'cleaner' version of if/else

// const dayOfTheWeek = (num) => {
//   switch (num) {
//     case 1:
//       'Monday'
//     case 2:
//       'Tuesday'
//     case 3:
//       'Wednesday'
//     case 4:
//       'Thursday'
//     case 5:
//       'Friday'
//     case 6:
//       'Saturday'
//     case 7:
//       'Sunday'
//     default:
//       console.log('Err. Something went wrong.')
//   }
// }

// console.log(dayOfTheWeek(5)) // should log Friday
/*----------------------------------------------------*/
console.log(`1d: Only wizards shall pass!`)

// const movieCharacters = [
//   {
//     name: 'Howl',
//     isAWizard: true,
//     quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
//   },
//   {
//     name: 'Kalcifer',
//     isAWizard: false,
//     quote: `I don't cook! I'm a scary and powerful fire demon!`,
//   },
//   {
//     name: 'Gandalf',
//     isAWizard: true,
//     quote: `You shall not pass!`,
//   },
//   {
//     name: 'Luke Skywalker',
//     isAWizard: false,
//     quote: `May the Force be with you.`,
//   },
// ]

// function onlyWizards(arrayOfCharacters) {
//   return arrayOfCharacters.filter((character) => character == true)
// }

// //check out the console.table() method you can use on objects!
// console.table(onlyWizards(movieCharacters)) //expecting an array of characters whose key/value pair is = isAWizard: true
/*----------------------------------------------------*/
console.log(`-----------Finished------------`)
