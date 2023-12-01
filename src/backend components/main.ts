export enum CARD_TYPES {
    NORMAL = "Normal",
    REVERSE = "REVerse",
    PLUS_2 = "+2",
    PLUS_4 = "+4",
    PICK_COLOR = "pick",
    SKIP = "skip",
};
export enum CARD_COLORS {
    RED = "red", GREEN = "green", BLUE = "blue", YELLOW = "yellow", NONE = "none"
}
export class Card {
    constructor(public readonly color: CARD_COLORS, public readonly type: CARD_TYPES, public readonly number: number = 0) {
    };

};

export class Deck {
    private _deck: Card[];
    constructor() {
        this._deck = [];
        for (var i = 0; i < 4; i++) {
            this._deck.push(new Card(CARD_COLORS.BLUE, CARD_TYPES.NORMAL, i));
        }
        this.createColors(CARD_COLORS.BLUE);
        this.createColors(CARD_COLORS.BLUE);
        this.createColors(CARD_COLORS.GREEN);
        this.createColors(CARD_COLORS.GREEN);
        this.createColors(CARD_COLORS.RED);
        this.createColors(CARD_COLORS.RED);
        this.createColors(CARD_COLORS.YELLOW);
        this.createColors(CARD_COLORS.YELLOW);
        for (let index = 0; index < 4; index++) {
            this._deck.push(new Card(CARD_COLORS.NONE, CARD_TYPES.PLUS_4));
            this._deck.push(new Card(CARD_COLORS.NONE, CARD_TYPES.PICK_COLOR));
        }
    }
    get cards() { return this._deck; };
    createColors(color: CARD_COLORS) {
        for (var i = 1; i <= 9; i++) {
            this._deck.push(new Card(color, CARD_TYPES.NORMAL, i));
        }
        this._deck.push(new Card(color, CARD_TYPES.REVERSE));
        this._deck.push(new Card(color, CARD_TYPES.PLUS_2));
        this._deck.push(new Card(color, CARD_TYPES.SKIP));
    }
}

export class Player {
    private _cards: Card[];
    constructor() {
        this._cards = [];
    }
    get cards() { return this._cards; }
}

export class Game {
    private _players: Player[];
    private _deck: Deck;
    constructor() {
        this._players = [];
        this._deck = new Deck();
    }
    get players() { return this._players; }
}