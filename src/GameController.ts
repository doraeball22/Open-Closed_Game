import { HandRepresent, PlayerInterface, HandRepresentType } from "./PlayerInterface";
import { Player } from "./Player";
import { BotPlayer } from "./BotPlayer";
import * as readlineSync from "readline-sync";

export class GameController {
    private hasWinner: boolean;
    private winner: Player;
    private predictor: Player;
    private readonly totalPlayer: number = 2;
    private players: Player[];

    constructor() {
        this.winner = null;
        this.hasWinner = false;
        this.players = [new Player(), new BotPlayer()];
        this.play();
    }

    private countTotalOpenHands(): number {
        let openHands: number = 0;
        this.players.forEach((player) => {
            player.hands.left === HandRepresent.Open && ++openHands;
            player.hands.right === HandRepresent.Open && ++openHands;
        });
        console.log('Total open hands', openHands);
        return openHands;
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
        this.congratsToWinner();
    }

    private askWhatIsYourInput(): string {
        let answer = readlineSync.question(`${this.predictor.name} are the predictor, what is your input?\n`);
        return answer.toUpperCase();
    }

    public askToPlayAgain(): boolean {
        let answer = readlineSync.question('Do you want to play again? (Y/n)\n');
        if (answer.toUpperCase() === 'N') {
            console.log('Ok, bye!\n');
        }
        return answer.toUpperCase() === 'Y';
    }

    private congratsToWinner(): void {
        this.winner = this.predictor;
        console.log(`${this.winner.name} WIN!!\n`);
    }
}