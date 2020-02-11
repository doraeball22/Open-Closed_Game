import { Player } from "./Player";
import { PlayerInterface, HandRepresent } from "./PlayerInterface";

export class BotPlayer extends Player { 
    constructor() {
        super('BOT');
    }

    showHands(): PlayerInterface['hands'] {
        this.hands.left = this.randomHand();
        this.hands.right = this.randomHand();
        console.log(`${this.name}: ${this.hands.left}${this.hands.right}`);
        return this.hands;
    }

    shoutOut(prediction?: number): number {
        return prediction ?? getRandomInt(4);
    }

    private randomHand(): HandRepresent {
        return Math.random() === 1 ? HandRepresent.Open : HandRepresent.Closed;
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}