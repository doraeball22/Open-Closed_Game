import { Player, BotPlayer } from '../src/Player';

const player = new Player('Human');
const botPlayer = new BotPlayer('Bot')

describe("Random hand", () => {
    it("should predict 4", () => {
        expect(player.shoutOut(4)).toBe(4);
    });
});