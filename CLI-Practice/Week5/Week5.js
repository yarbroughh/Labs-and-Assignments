
// var loggedIn = false;
// var attempts = 0;

// while (!loggedIn) {
//     attempts++;
        
//     var username = prompt('Username:');

//     var password = prompt('Password:');

//     if (username == 'samy123' && password == '12345') {

//         alert('Welcome back, ' + username);

//         loggedIn = true;

//     } else {

//         alert('Inaccurate credentials!');
        
//         if (attempts >= 3) {
//             alert('You are locked out.');
//             break;
//         }
//     }

// }

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let allNums = " ";

for (let i = 1; i <= 10; i++) {
    allNums += i
}

console.log(allNums);

// let names = "The names were: ";
// let entry = prompt("Enter a name");

// while(entry !== "done") {
//     names += entry + ", ";
//     entry = prompt("Enter a name");
// }

// alert (names);

let people;
let message = "";

while (isNaN(people)) { 
    people = Number(prompt("How many people are in the room?"));
    if (isNaN(people)) {
    alert ("Invalid input. Please enter a valid number.");
    }
}

let morning = prompt("Is it morning?");

for(let i = 0; i < people; i++) {
    if (morning.toLowerCase() === "yes") {
        message += "Good morning!\n";
    } else {
        message += "Good afternoon!\n";
    } 
}

alert (message)