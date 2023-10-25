/* 
The main loop of gameplay functions for an UNO Game. 

As it stands, there will be quite a few objects. I'm not sure how this will communicate with the game clients,
but I have 2 weeks to figure that out.

@author jdeanes0
@version 10/25/23
*/

/**
 * Holds data for individual cards and logic for matching colors and types.
 */
class Card {
    /*Holds data for individual cards and logic for matching colors and types.*/
    /**
     * @param {string} type
     * @param {number} color
     */
    constructor(type, color) {
        this.type = type;
        this.color = color;
    }

    /**
     * @param {Card} foreignCard
     */
    compareTo(foreignCard) {
        let isStackable = false

    }
}

class Hand {
    /*Holds data for a player's entire deck of cards.
    The deck may also be implemented as a hand.*/
    /**
     * @param {Card[]} arrofcards
     */
    constructor(arrofcards) {
        this.cards = arrofcards;
        this.amount = arrofcards.length
    }
}

class Deck {
    /*Essentially acts as a stack for the cards to be given to players.
    Players will also draw from this deck at the beginning of the game.*/
    /**
     * @param {Hand} hand
     */
    constructor(hand) {
        this.hand = hand
        this.count = hand.amount // number of cards in the deck
    }
}

/**
 * Each user has a hand and some sort of state.
 * For state, we could say that they could be close to uno. isUno?
 * Additionally, a user can be extended to a class called AI user.
 * The AI User will have some overrides to play automatically.
 */
class User {
    /**
     * @param {Hand} hand
     */
    constructor(hand) {
        this.hand = hand
        this.isUno = false // This should never need to start as true.
    }

    /**
     * Very rough function, but checks if a user has or does not have Uno.
     * This is meant to be called by other class methods any time they may update a card amount.
     */
    checkIfUno() {
        if (this.hand.amount < 2) {
            // TODO: prompt user to declare UNO
            // TODO: This definitely an async await shenanigan
            this.isUno = true // If the user has only one card, change their state to enable them to win.
        }
        if (this.hand.amount > 1 && this.isUno == true) {
            this.isUno = false // reset to false if it was previously true and the user has too many cards.
        }
    }

    something() {

    }
}

/**
 * The UserLoop is a special numerical object to adjust the turn number for the players in the game.
 * Is this actually a queue? NO!
 * 
 * ITS A CLL! WATCH OUT!
 */
class UserLoop {

    /**
     * @param {number} numplayers
     */
    constructor(numplayers) {
        this.numplayers = numplayers
    }

    march() {

    }
    
    wrap() {
        
    }

}

/**
 * Handles initial connection of all users, instantiates the deck, initially deals cards to users.
 * 
 * In essence, this function takes care of all functions that set up the game and do not require user input.
 */
function load() {

}

/**
 * Begin a forever loop to handle going around the users.
 * @param {number} numplayers
 */
function loop(numplayers) {
    let currentUsers = new UserLoop(numplayers)
    while (true) {

    }
}

/**
 * Contains the main gameplay loop for the program, and facilitates communication to and from the clients.
 * ...I think. I don't know what will communicate with the server at this point.
 */
function main() {
    load() // Unsure if this returns anything as of yet

    let numplayers = 4
    loop(numplayers)
}

main()
