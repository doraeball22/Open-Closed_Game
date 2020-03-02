import { Player, BotPlayer, HandRepresent } from '../src/Player';

const player = new Player('Human');
const botPlayer = new BotPlayer('Bot');

describe("player predicts total open hands", () => {
    it("should predict 4", () => {
        expect(player.shoutOut(4)).toBe(4);
    });
});

describe("Bot predicts total open hands", () => {
    it("should predict random integer number between in range [0-4]", () => {
        for (let i = 0; i < 100; ++i) {
            expect(botPlayer.shoutOut()).toBeGreaterThanOrEqual(0);
            expect(botPlayer.shoutOut()).toBeLessThan(5);
        }
    });
});

describe("Player shows hands ['OO', 'OC', 'CC', 'CO']", () => {
    it("should follow hands pattern  Left=Open, Right=Open", () => {
        expect(player.showHands('OO')).toEqual({ left: HandRepresent.Open, right: HandRepresent.Open });
    });
    it("should follow hands pattern  Left=Open, Right=Closed", () => {
        expect(player.showHands('OC')).toEqual({ left: HandRepresent.Open, right: HandRepresent.Closed });
    });
    it("should follow hands pattern  Left=Closed, Right=Closed", () => {
        expect(player.showHands('CC')).toEqual({ left: HandRepresent.Closed, right: HandRepresent.Closed });
    });
    it("should follow hands pattern  Left=Closed, Right=Open", () => {
        expect(player.showHands('CO')).toEqual({ left: HandRepresent.Closed, right: HandRepresent.Open });
    });
});