export interface PlayerInterface {
    name: string;
    hands: {
        left: HandRepresent.Open | HandRepresent.Closed,
        right: HandRepresent.Open | HandRepresent.Closed
    }
}

export type HandRepresentType = keyof typeof HandRepresent;

export enum HandRepresent {
    Open = 'O',
    Closed = 'C'
}

export const MAX_HANDS = 2;