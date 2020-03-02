import { Player } from "./Player";
import { PlayerInterface, HandRepresent } from "./PlayerInterface";

export class BotPlayer extends Player { 
    constructor(name?: string) {
        super(name || 'AI');
    }

    showHands(answer?: string, prediction?: number): void {
        this.hands = {
            left: this.randomHand(),
            right: this.randomHand()
        }
        console.log(`${this.name}: ${this.hands.left}${this.hands.right}${prediction ? prediction : ''}`);
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