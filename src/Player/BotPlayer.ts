import { Player } from "./Player";
import { HandRepresent, PlayerInterface } from "./PlayerInterface";

export class BotPlayer extends Player { 
    constructor(name?: string) {
        super(name || 'AI');
    }

    showHands(answer?: string, prediction?: number): PlayerInterface['hands'] {
        this.hands = {
            left: this.randomHand(),
            right: this.randomHand()
        }
        console.log(`${this.name}: ${this.hands.left}${this.hands.right}${prediction !== null ? prediction : ''}`);
        return this.hands;
    }

    shoutOut(): number {
        let prediction =  getRandomInt(5);
        return prediction;
    }

    private randomHand(): HandRepresent {
        return Math.random() < 0.5 ? HandRepresent.Open : HandRepresent.Closed;
    }
}

function getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
}