/**
 * Node class, allows for storing current data and looking at the node in front of and behind it
 */
class CLLNode {

    /**
     * Constructs a CLLNode with the data provided and empty references
     * 
     * @param {User} dat A User.
     */
    constructor(dat) {
        this.dat = dat
        this.next = null
        this.previous = null
    }
}

class CLL {

    /**
     * Constructs a CLL out of a array of players
     * 
     * @param {User[]} players array of players
     */
    constructor(players) {
        this.count = 0
        players.forEach((player) => this.add(player));
    }

    /**
     * Adds a player to the CLL
     * 
     * @param {User} player 
     */
    add(player) {
        let n = new CLLNode(player);

        // Traveler


    }

    rotate() {
        this.head = this.head.next

    }

    reverse() {

    }
}