import { PlayerInterface, HandRepresent, HandRepresentType } from "./PlayerInterface";

export class Player implements PlayerInterface {
    name: string;
    hands: PlayerInterface['hands'];
    
    constructor(name?: string) {
        this.name = name ?? 'you';
    }

    showHands(answer?: string): PlayerInterface['hands'] {
        let left = answer[0] === HandRepresent.Closed ? HandRepresent.Closed : HandRepresent.Open;
        let right = answer[1] === HandRepresent.Closed ? HandRepresent.Closed : HandRepresent.Open
        this.hands.left = left;
        this.hands.right = right;
        return this.hands;
    }

    shoutOut(prediction?: number): number {
        return prediction ?? 0;
    }
}