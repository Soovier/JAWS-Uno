// /**
// The main loop of gameplay functions for an UNO Game. 

// As it stands, there will be quite a few objects. I'm not sure how this will communicate with the game clients,
// but I have 2 weeks to figure that out.

// So. This communicates with the clients as well. Unfortunately, I think that means that I will need to rename this to index.

// The main loop will iterate through the users, and with that, the users will match the cards on their end to reduce
// connections and server traffic.

// @author jdeanes0
// @version 11/1/23
// */

// /**
//  * Holds data for individual cards and logic for matching colors and types.
//  */
// class Card {
//     /*Holds data for individual cards and logic for matching colors and types.*/
//     /**
//      * @param {string} type
//      * @param {number} color
//      */
//     constructor(type, color) {
//         this.type = type;
//         this.color = color;
//     }
// }

// class Hand {
//     /*Holds data for a player's entire deck of cards.
//     The deck may also be implemented as a hand.*/
//     /**
//      * @param {Card[]} arrofcards
//      */
//     constructor(arrofcards) {
//         this.cards = arrofcards;
//         this.amount = arrofcards.length
//     }
// }

// class Deck extends Hand {
//     /*Essentially acts as a stack for the cards to be given to players.
//     Players will also draw from this deck at the beginning of the game.*/
//     /**
//      * @param {Card[]} arrofcards
//      */
//     constructor(arrofcards) {
//         super(arrofcards)
//     }


// }

// /**
//  * Each user has a hand and some sort of state.
//  * For state, we could say that they could be close to uno. isUno?
//  * Additionally, a user can be extended to a class called AI user.
//  * The AI User will have some overrides to play automatically.
//  * 
//  * @author jdeanes0
//  * @version 10/30/23
//  */
// class User {
//     /**
//      * @param {Hand} hand
//      * @param {any} address
//      */
//     constructor(hand, address) {
//         this.address = address
//         this.hand = hand
//         this.isAI = false // different logic will exist if it is an AI player. TODO: Implement.
//         this.isUno = false // This should never need to start as true.
//     }

//     /**
//      * Very rough function, but checks if a user has or does not have Uno.
//      * This is meant to be called by other class methods any time they may update a card amount.
//      */
//     checkIfUno() {
//         if (this.hand.amount < 2) {
//             // TODO: prompt user to declare UNO
//             // TODO: This definitely an async await shenanigan
//             this.isUno = true // If the user has only one card, change their state to enable them to win.
//         }
//         if (this.hand.amount > 1 && this.isUno == true) {
//             this.isUno = false // reset to false if it was previously true and the user has too many cards.
//         }
//     }

//     something() {

//     }
// }

// /**
//  * The UserLoop is a special numerical object to adjust the turn number for the players in the game.
//  * Is this actually a queue? NO!
//  * 
//  * ITS A CLL! WATCH OUT!
//  * 
//  * I like this class because it acts similarly to how I imagine an API would work.
//  * I think my abstraction work here is goated.
//  * 
//  * @author jdeanes0
//  * @version 10/30/23
//  */
// class UserLoop {

//     /**
//      * Takes an array of players to create a CLL with extra features.
//      * 
//      * @param {User[]} players
//      */
//     constructor(players) {
//         this.players = new CLL(players)
//     }

//     reverse() {
//         this.players.reverse()
//         this.march()
//     }

//     skip() {
//         this.players.rotate()
//         this.players.rotate()
//     }

//     march() {
//         this.players.rotate()
//     }
// }

// /**
//  * Handles initial connection of all users, instantiates the deck, initially deals cards to users.
//  * 
//  * In essence, this function takes care of all functions that set up the game and do not require user input.
//  * Connects the players and add their connection information to a list of type User
//  * 
//  * @return 
//  */
// function load() {

//     // return playerloop
//     return null
// }

// /**
//  * Begin a forever loop to handle going around the users.
//  * @param {UserLoop} loop
//  */
// function loop(loop) {
//     while (true) {
//         var user
//         var user_has_won = false
//         var card_case = "normal"

//         // Wait for user's card choice (networking)






//         // If a plyer's card count is 0, end the game
//         if (user_has_won) {
//             console.log("User " + user + " has won the game!")
//             break;
//         }

//         // End-of-turn logic.
//         switch (card_case) {
//             case "normal":
//                 loop.march()
//                 break;

//             case "reverse":
//                 loop.reverse()
//                 break;

//             case "skip":
//                 loop.skip()
//                 break;
        
//             default:
//                 console.log("A case was not matched; defaulting to regular behavior. Bug ?s")
//                 break;
//         }
//     }
// }

// /**
//  * Contains the main gameplay loop for the program, and facilitates communication to and from the clients.
//  * ...I think. I don't know what will communicate with the server at this point.
//  */
// function main() {
//     load() // Unsure if this returns anything as of yet

//     // loop(numplayers)

// }

// main()
