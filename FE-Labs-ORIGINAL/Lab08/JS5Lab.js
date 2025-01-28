/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  Object Oriented Programming (OOP) Lab
   FE JS5 Lab
*/

/* ----------------------------------------------------- */

/* Key Terms:
 * Class
 * Constructor
 * Object
 * Method
 * Instance
 * Instantiate
 * Parameter
 * Argument
 * Invoke or call a function
 * Superclass or Parent class
 * Subclass or Child class
 *
 * Objectives:
 * ​Utilize appropriate data types and structures.
 * Use dot notation to access object property values
 * Create an instance of a class
 * Call methods of an instantiated class
 * Understand how inheritance works in basic OOP
 * Use superclasses and subclasses
 */

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*-------------------------------------------------------*/
// Question 1: Object Values
console.log(`--------------------------
Question 1: Object Values \n`)

// Provided code:
let person = {
  firstname: 'Niel',
  lastname: 'Armstrong',
  year: 1969,
  occupation: 'astronaut',
}
console.log(
  `${person.firstname} ${person.lastname} was an ${person.occupation}.`
)

/*
 * Using the person object from above and the given console.log for reference:
 * Step 1: Print to the console the following sentence (make sure to fill in the name, and year programmatically): "On July 20th 1969, Niel Armstrong was the first person to set foot on the Earth's moon."
 * Notice that the provided console above is using template literals.
 *
 * ↓ YOUR CODE HERE ↓ */
// "On July 20th 1969, Niel Armstrong was the first person to set foot on the Earth's moon."

/*-------------------------------------------------------*/
// Question 2: Instance of a Class
console.log(`--------------------------
Question 2: Instance of a Class \n`)

// Provided code:
class Greeting {
  constructor(name, place) {
    this.name = name
    this.place = place
  }

  hello() {
    console.log(`Hello, ${this.name} from ${this.place}!`)
  }
}

let greeting = new Greeting('Jennifer', 'NY')
greeting.hello()

/*
 * Using the provided code above:
 * Step 1: Create another instance of Greeting called myGreeting with your name and location as the arguments
 * Step 2: Invoke the hello method with the myGreeting instance
 * Step 3: A greeting should print to the console
 *
 * ↓ YOUR CODE HERE ↓ */

/*-------------------------------------------------------*/
// Question 3: myBook
console.log(`--------------------------
Question 3: Instance of a Class \n`)

// Provided code:
class Book {
  constructor(title, author) {
    this.title = title
    this.author = author
  }

  describe() {
    return `${this.title} was written by ${this.author}.`
  }
}

/*
 * Using the provided code above:
 * Step 1: Create an new instance of Book called 'myBook' (see "new" keyword)
 * Step 2: Use "Pride and Prejudice" and "Jane Austen" as the arguments
 * Step 3: Using myBook, print just the title of the book to the console (see "this" keyword)
 * Step 4: Now print the author of the book to the console
 * Step 5: Invoke the describe method for the myBook instance. Surround with console.log to print to the console.
 * Step 6: Create an new instance of Book called 'yourBook' with a title and author of your choosing
 * Step 7: Invoke the describe method for the yourBook instance. Make it print to the console also.
 *
 * ↓ YOUR CODE HERE ↓ */

/*-------------------------------------------------------*/
// Question 4: Create a Class
console.log(`--------------------------
Question 4: Create a Class \n`)

/*
 * Step 1: Create a Fruit class with a constructor that has the properties of name, color, and taste
 * Step 2: Create a method inside of Fruit that prints a description of the fruit to the console, for example: "A lime is green and has a sour taste."
 * Step 3: Create an instance of Fruit called fruit1 with arguments lime, green, and sour
 * Step 4: Then create an instance of Fruit called fruit2 with arguments banana, yellow, and sweet
 * Step 5: Invoke the describe method for both instances of Fruit, fruit1 and fruit2.
 *
 *
 * ↓ YOUR CODE HERE ↓ */

/*-------------------------------------------------------*/
// Question 5: Inheritance and Polymorphism
console.log(`--------------------------
Question 5: Inheritance and Polymorphism \n`)

// Look at the provided code below. Notice how Student and Teacher inherit from the Person class through the use of the "extends" and "super" key words. Also, how Student has a redefined details method that is more appropriate than the details method it would have inherited from the Person super class...

class Person {
  constructor(name, role) {
    this.name = name
    this.role = role
  }
  introduction() {
    return `Hi, my name is ${this.name}.`
  }
  details() {
    return `I work as a ${this.role}.`
  }
}

class Student extends Person {
  constructor(name, role) {
    super(name, role)
  }
  details() {
    return `I am a ${this.role}.`
  }
}

class Teacher extends Person {
  constructor(name, role) {
    super(name, role)
  }
}

/*
 * Using the provided code above:
 * Step 1: Instantiate a new student called student with arguments of "Jacky" and "student"
 * Step 2: Instantiate a new teacher called teacher with arguments of "Mr. Bean" and "teacher"
 * Step 3: Call the introduction method on your new student instance AND the details method, make sure that the results are printed to the console.
 * Step 4: Call the introduction method on your new teacher instance AND the details method, make sure that the results are printed to the console.
 *
 * ↓ YOUR CODE HERE ↓ */

/*-------------------------------------------------------*/
// Question 6: Inheritance
console.log(`--------------------------
Question 6: Inheritance \n`)

// Provided code:
class Parent {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  details() {
    console.log(`${this.name} Addams is ${this.age} years old.`)
  }
}

/*
 * Using the provided code above:
 * Step 1: Create a subclass called Child that inherits the name and age properties from the Parent super class.
 * Step 2: Create an instantance of the Child class called child with arguments "Pugsley" and 10
 * Step 3: Invoke the details method using the new instance child.
 * HINT: You should be using vital key terms like extends and super
 *
 * ↓ YOUR CODE HERE ↓ */

/*-------------------------------------------------------*/
// Question 7: Put it all together
console.log(`--------------------------
Question 7: Put it all together \n`)

/*
 * Step 1: Create a class called Movie with a constructor that takes in a title and director
 * Step 2: Create a method inside of Movie called "describe" that returns the following sentence (make sure to fill in the title and director programmatically): "The movie [movie name here] was directed by [director name here]."
 * Step 3: Create another class called List with a constructor that is an empty array called movies
 * Step 4: Create a method called addMovie inside of List that will recieve a movie as a parameter and add it to the movies array
 * Step 5: Create another method called displayMovies in the List class that will return all of the movie titles and directors using a for loop
 * Step 6: Create two instances of Movie called movie1, use "Jurassic Park" and "Steven Spielberg" as it's arguments AND movie2, use "How the Grinch stole Christmas" and "Ron Howard" as it's arguments
 * Step 7: Invoke the describe method on movie1, make sure it prints to the console
 * Step 8: Invoke the desrcibe method on movie2, make sure it prints to the console
 * Step 9: Create an instance of List called list and add movie1 and movie2 to the movies array
 * Step 10: Display the movies information to the console, using the new instance list
 *
 * ↓ YOUR CODE HERE ↓ */

console.log(`-----------Finished------------`)
