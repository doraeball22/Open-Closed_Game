import { PlayerInterface, HandRepresent, HandRepresentType } from "./PlayerInterface";

export class Player implements PlayerInterface {
    name: string;
    hands: PlayerInterface['hands'];
    
    constructor(name?: string) {
        this.name = name ?? 'You';
        this.hands = {
            left: HandRepresent.Closed,
            right: HandRepresent.Closed
        }
    }

    showHands(answer?: string): void {
        this.hands.left = answer[0] === HandRepresent.Closed ? HandRepresent.Closed : HandRepresent.Open;
        this.hands.right = answer[1] === HandRepresent.Closed ? HandRepresent.Closed : HandRepresent.Open;
    }

    shoutOut(prediction?: number): number {
        return prediction ?? 0;
    }
}