export enum CARD_TYPES {
    NORMAL,
    REVERSE,
    PLUS_2,
    PLUS_4,
    PICK_COLOR,
    SKIP,
};
export enum CARD_COLORS {
    RED, GREEN, BLUE, YELLOW, NONE
}
export class Card {
    constructor(public readonly color: CARD_COLORS, public readonly type: CARD_TYPES, public readonly number: number = 0) {
    };

}

export class Deck {
    deck: Card[];
    constructor() {
        this.deck = [];
        for (var i = 0; i < 4; i++) {
            this.deck.push(new Card(CARD_COLORS.BLUE, CARD_TYPES.NORMAL, i));
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
            this.deck.push(new Card(CARD_COLORS.NONE, CARD_TYPES.PLUS_4));
            this.deck.push(new Card(CARD_COLORS.NONE, CARD_TYPES.PICK_COLOR));
        }
    }
    createColors(color: CARD_COLORS) {
        for (var i = 1; i <= 9; i++) {
            this.deck.push(new Card(color, CARD_TYPES.NORMAL, i));
        }
        this.deck.push(new Card(color, CARD_TYPES.REVERSE));
        this.deck.push(new Card(color, CARD_TYPES.PLUS_2));
        this.deck.push(new Card(color, CARD_TYPES.SKIP));
    }
}
