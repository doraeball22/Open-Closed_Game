import { PlayerInterface, HandRepresent, HandRepresentType } from "./PlayerInterface";

export class Player implements PlayerInterface {
    name: string;
    hands: {
        left: HandRepresent.Open | HandRepresent.Closed,
        right: HandRepresent.Open | HandRepresent.Closed
    }
    
    constructor(name?: string) {
        this.name = name ?? 'you';
    }

    showHands(answer?: string): void {
        this.hands.left = answer[0] === HandRepresent.Closed ? HandRepresent.Closed : HandRepresent.Open;
        this.hands.right = answer[1] === HandRepresent.Closed ? HandRepresent.Closed : HandRepresent.Open
    }

    shoutOut(prediction?: number): number {
        return prediction ?? 0;
    }
}