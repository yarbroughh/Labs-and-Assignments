//Create class for individual cards. The elements in the constructor are named the same as after 
// the = but "this" can be named differently. 
class Card {
    constructor (cardSuit, cardNumber) {
        this.cardSuit = cardSuit;
        this.cardNumber = cardNumber;
    }
    toString() {
        return `${this.cardNumber}${this.cardSuit}`
    }
}

//Create class for the deck of cards which contains 52 individual cards.
//These are all of the elements that make up the class:
class Deck {
    constructor () {
    this.cards = [];
    this.suits = ["♠️", "❤️", "♦️", "♣️"];
    this.numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    this.createDeck();
    this.shuffle();
    }
    //This is the method within the class to combine the suits and numbers using a for loop within
    //a for loop to go through the arrays and combine the suits and numbers using push to create
    //the deck.
    createDeck () {
        for (const suit of this.suits) {
            for (const number of this.numbers) {
                this.cards.push(new Card(suit, number));
            }
        }
    }
    //This is the method within the class to shuffle the cards once the deck is made. 
    //I found Math, floor, and random with Google.
    shuffle () {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        }
    }
}

//Create class for the players, taking in 3 items; name, score, and cards
class Player {
    constructor (name, score, cards) {
        this.name = name;
        this.score = score;
        this.cards = cards;
    }
}

//This creates an instance of Deck to make the deck we'll play with and I displayed that new deck 
//to console log after it's shuffled.
const warDeck = new Deck();
console.log("Shuffled Deck: ", warDeck.cards.map(card => card.toString()).join(', '));

//Create an instance for each of two players, having their score start at 0 and having an open array to 
//insert the dealt cards.
const player1 = new Player("James", 0, []);
const player2 = new Player("Heather", 0, []);

//Function to deal 52 cards - 26 per player - using modulo to give every other card to player1 
//and the other to player2.
function Deal(warDeck, player1, player2) {
    for (let i = 0; i < warDeck.cards.length; i++) {
        if (i % 2 === 0) {
            player1.cards.push(warDeck.cards[i]);
        } else {
            player2.cards.push(warDeck.cards[i]);
        }
    }
    warDeck.cards = [];
}

//This initializes the deal function.
Deal(warDeck, player1, player2);

//This will turn over one card at a time until the players run out of cards. It will add a point to 
//the player whose card is higher.
while (player1.cards.length > 0 && player2.cards.length > 0) {
    if (player1.cards[0].cardNumber > player2.cards[0].cardNumber) {
        player1.score += 1;
    } else if (player2.cards[0].cardNumber > player1.cards[0].cardNumber) {
        player2.score += 1; 
        }

    //Each player's card will be displayed in console for each round.
    console.log(`Player 1: ${player1.cards[0].toString()} Player 2: ${player2.cards[0].toString()}`);


    //This part of the while loop removes the "laid" card from each player's pile using splice and 
    //the loop continues until all cards are removed.
    player1.cards.splice(0,1);
    player2.cards.splice(0,1);
    }

    //Display the final score.
    console.log(`${player1.name} Final Score: ${player1.score.toString()}`);
    console.log(`${player2.name} Final Score: ${player2.score.toString()}`);


//Logic to declare the winner depending on whose score is higher and display a message in console.
if (player1.score > player2.score) { 
    console.log(`${player1.name} Wins!`);
} else if (player2.score > player1.score) { 
    console.log(`${player2.name} Wins!`);
} else { 
    console.log(`It's a Tie!`);
}


