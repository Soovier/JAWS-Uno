/**
 * Node class, allows for storing current data and looking at the node in front of and behind it
 */
class CLLNode {

    /**
     * Constructs a CLLNode with the data provided and empty references
     * 
     * @param {User} dat a user object
     */
    constructor(dat) {
        this.dat = dat
        // @ts-ignore Note: TS hates this. TS is a hater and does not understand.
        this.next = null
        // @ts-ignore
        this.previous = null
    }
}

/**
 * CLL class to act as a parent to the user loop class.
 */
class CLL {

    /**
     * Constructs a CLL out of a array of players
     * 
     * @param {User[]} players array of users
     */
    constructor(players) {
        this.count = 0
        this.isReversed = false
        players.forEach((player) => this.add(player))
    }

    /**
     * Adds a player to the CLL
     * Should work while the CLL is reversed but note that this is not intended behavior.
     * 
     * @param {User} player A singular player to add.
     */
    add(player) {
        let n = new CLLNode(player)

        // If the count is 0, just add a node as head.
        if (this.count == 0) {
            this.head = n
            this.head.next = this.head // close the loop
            this.head.previous = this.head // close the loop in the opposite direction
            this.count = 1 // Set count to one
        } else {
            let v = this.head // keep a reference to the first head
            while (v.next != this.head) {
                v = v.next // if the next node is not head, travel to it.
            }
            // After that for loop, we are now in a position to add the node.

            // Start of splice link
            v.next = n
            n.previous = v
            // End of splice link

            // Start of restoring circularity
            n.next = this.head
            this.head.previous = n
            // End of restoring circularity

            this.count += 1
        }
    }

    /**
     * Rotates the head of the CLL
     */
    rotate() {
        if (this.isReversed) {
            this.head = this.head.previous
        } else {
            this.head = this.head.next
        }
    }

    /**
     * Switches rotate between using next and previous references.
     */
    reverse() {
        if (this.isReversed) {
            this.isReversed = true
            console.log("User loop is already reversed. Bug?")
        } else {
            this.isReversed = false
        }
    }
}