import { HandRepresent, PlayerInterface, HandRepresentType } from "./PlayerInterface";
import { Player } from "./Player";
import { BotPlayer } from "./BotPlayer";
import readlineSync from "readline-sync";

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

export class GameController {
    private hasWinner: boolean = false;
    private winner: Player;
    private predictor: Player;
    private readonly totalPlayer: number = 2;
    private players: Player[];

    constructor() {
        let player = new Player();
        let bot = new BotPlayer();
        this.players = [player, bot];
        this.play();
    }

    private countTotalOpenHands(): number {
        let openHands = this.players.filter((player) => player.hands.left === HandRepresent.Open || player.hands.right);
        return openHands.length;
    }

    private isPredictionCorrect(prediction: number): boolean {
        return prediction === this.countTotalOpenHands();
    }

    private play() {
        console.log('Welcome to the game!');
        for (let i = 0; !this.hasWinner; ++i) {
            this.predictor = this.players[i % this.totalPlayer];
            let answer = this.askWhatIsYourInput();

            let prediction = this.predictor.shoutOut(parseInt(answer[2]));
            this.players.forEach((player) => player.showHands(answer));

            this.hasWinner = this.isPredictionCorrect(prediction);
        }
        this.winner = this.predictor;
        // TODO: Play again?
    }

    private askWhatIsYourInput(): string {
        let answer = readlineSync.question(`${this.predictor.name} are the predictor, what is your input?`,);
        return answer;
    }

    public askToPlayAgain(): boolean {
        // TODO: Implement
        return false;
    }
}