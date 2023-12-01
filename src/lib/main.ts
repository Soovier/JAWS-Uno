
export enum CARD_TYPES {
    NORMAL = "Normal",
    REVERSE = "Reverse",
    PLUS_2 = "+2",
    PLUS_4 = "+4",
    PICK_COLOR = "pick",
    SKIP = "skip",
};
export enum CARD_COLORS {
    RED = "red", GREEN = "green", BLUE = "blue", YELLOW = "yellow", NONE = "none"
}
export class Card {
    constructor(public readonly color: CARD_COLORS, public readonly type: CARD_TYPES, public readonly number: number = -1) {
    };
    canPlay(other: Card) {
        if (this.color == CARD_COLORS.NONE) return true;
        if (this.color == other.color) return true;
        if (this.number != -1 && this.number == other.number) return true;
        if (this.type != CARD_TYPES.NORMAL && this.type == other.type) return true;
        return false;
    }
};

export class Deck {
    private _deck: Card[];
    constructor(decks: number) {
        this._deck = [];
        for (let index = 0; index < decks; index++) {
            this.createColors(CARD_COLORS.BLUE);
            this.createColors(CARD_COLORS.GREEN);
            this.createColors(CARD_COLORS.RED);
            this.createColors(CARD_COLORS.YELLOW);
            for (let index = 0; index < 4; index++) {
                this._deck.push(new Card(CARD_COLORS.NONE, CARD_TYPES.PLUS_4));
                this._deck.push(new Card(CARD_COLORS.NONE, CARD_TYPES.PICK_COLOR));
            }
        }
    }
    get cards() { return this._deck; };
    private createColors(color: CARD_COLORS) {
        for (var i = 1; i <= 9; i++) {
            this._deck.push(new Card(color, CARD_TYPES.NORMAL, i));
            this._deck.push(new Card(color, CARD_TYPES.NORMAL, i));
        }
        this._deck.push(new Card(color, CARD_TYPES.NORMAL, 0));
        this._deck.push(new Card(color, CARD_TYPES.REVERSE));
        this._deck.push(new Card(color, CARD_TYPES.PLUS_2));
        this._deck.push(new Card(color, CARD_TYPES.SKIP));
        this._deck.push(new Card(color, CARD_TYPES.REVERSE));
        this._deck.push(new Card(color, CARD_TYPES.PLUS_2));
        this._deck.push(new Card(color, CARD_TYPES.SKIP));
    }
    getCard() {
        const rand = Math.floor(Math.random() * (this._deck.length - 1));
        const card = this._deck[rand];
        this._deck[rand] = this._deck.pop() as Card;
        return card;
    }
}

export class Player {
    constructor(public readonly name: string, private _cards: Card[] = []) {
    }
    get cards() { return this._cards; }
    getCard(i: number) {
        return this.cards[i];
    }
    addCard(card: Card) {
        this._cards.push(card);
    }
    hasWon() {
        return this.cards.length == 0;
    }
    removeCard(i: number) {
        const card = this.cards[i];
        this.cards[i] = this.cards.pop() as Card;
        return card;
    }
}

export class Game {
    private _players: Player[];
    private _turn: number;
    private _deck: Deck;
    private _played: Card[];
    constructor() {
        this._players = [];
        this._deck = new Deck(1);
        this._played = [];
        // Game has not started
        this._turn = -1;
    }
    get players() { return this._players; }
    get turn() { return this._players[this._turn]; }
    get lastCard() { return this._played[this._played.length - 1] }
    getPlayer(player: number) {
        return this.players[player];
    }
    addPlayer(name: string) {
        this._players.push(new Player(name));
    }
    nextTurn() {
        this._turn++;
        if (this._turn >= this._players.length)
            this._turn = 0;
        return this.turn;
    }
    isDone() {
        for (let index = 0; index < this.players.length; index++) {
            const player = this.players[index];
            if (player.hasWon()) return true;
        }
        return false;
    }
    play(player: number, card: number) {
        let p = this.getPlayer(player);
        let c = p.removeCard(card);
        console.log(c);
        if (!c.canPlay(this.lastCard)) console.log("Can't Play!");
        this.nextTurn();
    }
    start() {
        this.distribute();
        this._played[0] = this._deck.getCard();
        this.nextTurn();
    }
    private distribute() {
        for (let index = 0; index < this._players.length; index++) {
            let element = this._players[index];
            for (let i = 0; i < 7; i++) {
                element.addCard(this._deck.getCard());
            }
        }
    }
}