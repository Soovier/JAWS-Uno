
export enum CARD_TYPES {
    NORMAL = "Normal",
    REVERSE = "Reverse",
    PLUS_2 = "PlusTwo",
    PLUS_4 = "wildCardPlusFour",
    PICK_COLOR = "wildCardNormal",
    SKIP = "Skip",
};
export enum CARD_COLORS {
    RED = "red", GREEN = "green", BLUE = "blue", YELLOW = "yellow", NONE = "none"
}
export class Card {
    constructor(public readonly color: CARD_COLORS, public readonly type: CARD_TYPES, public readonly number: number = -1) {
    };
    canPlay(other: Card) {
        if (this.color == CARD_COLORS.NONE) return true;
        if (other.color == CARD_COLORS.NONE) return true;
        if (this.color == other.color) return true;
        if (this.number != -1 && this.number == other.number) return true;
        if (this.type != CARD_TYPES.NORMAL && this.type == other.type) return true;
        return false;
    }
    get cardString() {
        switch (this.type) {
            case CARD_TYPES.NORMAL:
                return this.color + this.number;
            case CARD_TYPES.REVERSE:
            case CARD_TYPES.PLUS_2:
            case CARD_TYPES.SKIP:
                return this.color + this.type;
            case CARD_TYPES.PLUS_4:
            case CARD_TYPES.PICK_COLOR:
                return this.type;
        }
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
        if (this.cards.length == 1)
            return this._deck.pop();
        const rand = Math.floor(Math.random() * (this._deck.length - 1));
        const card = this._deck[rand];
        if (rand == this._deck.length - 1) {
            this._deck.pop()
        } else {
            this._deck[rand] = this._deck.pop() as Card;
        }
        return card;
    }
    isEmpty() {
        return this._deck.length == 0;
    }
}

export class Player {
    constructor(public readonly name: string, private _cards: Card[] = [], private uno = false) {
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
        if (i == this.cards.length - 1) {
            this.cards.pop();
        } else {
            this.cards[i] = this.cards.pop() as Card;
        }
        return card;
    }
}

export class Game {
    private _players: Player[];
    private _turn: number;
    private _deck: Deck;
    private _played: Card[];
    private _isReverse: boolean;
    private _color: CARD_COLORS;
    constructor() {
        this._players = [];
        this._deck = new Deck(1);
        this._played = [];
        // Game has not started
        this._turn = -1;
        this._isReverse = false;
        this._color = CARD_COLORS.NONE;
    }
    get players() { return this._players; }
    get turn() { return this._turn; }
    get playing() { return this._players[this._turn]; }
    get lastCard() { return this._played[this._played.length - 1] }
    draw(player: number) {
        this.players[player].addCard(this.getCardFromDeck());
    }
    getPlayer(player: number) {
        return this.players[player];
    }
    addPlayer(name: string) {
        this._players.push(new Player(name));
    }
    nextTurn() {
        if (this._isReverse)
            this._turn--;
        else
            this._turn++;
        if (this._turn >= this._players.length)
            this._turn = 0;
        if (this._turn < 0) this._turn = this._players.length - 1;
        return this.playing;
    }
    isDone() {
        for (let index = 0; index < this.players.length; index++) {
            const player = this.players[index];
            if (player.hasWon()) return true;
        }
        return false;
    }
    canPlay(player: number, card: number) {
        if (this.turn != player) {
            return false;
        }
        let p = this.getPlayer(player);
        let c = p.getCard(card);
        return this.canPlayCard(c);
    }
    private canPlayCard(card: Card) {
        return card.color == CARD_COLORS.NONE || (card.color == this._color || card.canPlay(this.lastCard));
    }
    play(player: number, card: number) {
        if (!this.canPlay(player, card)) {
            return false;
        }
        let p = this.getPlayer(player);
        let c = p.removeCard(card);
        this.playCard(c);
        return true;
    }
    private playCard(c: Card, color: CARD_COLORS = CARD_COLORS.NONE) {
        this._played.push(c);
        this._color = c.color;
        if (c.type == CARD_TYPES.REVERSE) this._isReverse = !this._isReverse;
        let next = this.nextTurn();
        switch (c.type) {
            case CARD_TYPES.PICK_COLOR:
                this._color = color;
                break;
            case CARD_TYPES.PLUS_4:
                next.addCard(this.getCardFromDeck());
                next.addCard(this.getCardFromDeck());
                this._color = color;
            case CARD_TYPES.PLUS_2:
                next.addCard(this.getCardFromDeck());
                next.addCard(this.getCardFromDeck());
            case CARD_TYPES.SKIP:
                this.nextTurn();
        }
    }
    private getCardFromDeck() {
        if (this._deck.isEmpty()) {
            this._deck.cards.concat(this._played);
            this._played = [this._played[this._played.length - 1]]
        }
        return this._deck.getCard() as Card;
    }
    start() {
        this.distribute();
        this.playCard(this.getCardFromDeck());
    }
    private distribute() {
        for (let index = 0; index < this._players.length; index++) {
            let element = this._players[index];
            for (let i = 0; i < 7; i++) {
                element.addCard(this.getCardFromDeck());
            }
        }
    }

}