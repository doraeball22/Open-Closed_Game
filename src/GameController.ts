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
        this.players = [new Player('You'), new BotPlayer('AI')];
        this.play();
    }

    private countTotalOpenHands(): number {
        let openHands: number = 0;
        this.players.forEach((player) => {
            player.hands.left === HandRepresent.Open && ++openHands;
            player.hands.right === HandRepresent.Open && ++openHands;
        });
        return openHands;
    }

    private isPredictionCorrect(prediction: number): boolean {
        return prediction === this.countTotalOpenHands();
    }

    private play() {
        console.log('Welcome to the game!');
        for (let i = 0; !this.hasWinner; ++i) {
            this.predictor = this.players[i % this.totalPlayer];
            let answer = this.askWhatIsYourInput(this.players[0]);
            
            let prediction = this.predictor.shoutOut(parseInt(answer[2]));
            this.players.forEach((player) => {
                let showHandsWithPrediction = player === this.predictor ? prediction : undefined;
                player.showHands(answer, showHandsWithPrediction);
            });

            this.hasWinner = this.isPredictionCorrect(prediction);
            console.log('\n');
        }
        this.congratsToWinner();
    }

    private askWhatIsYourInput(player: Player): string {
        let isValidInput: boolean = true;
        let answer: string = '';
        do {
            answer = readlineSync.question(`${this.predictor.name} is/are the predictor, what is your input?\n`);
            answer = answer.toUpperCase();
            isValidInput = this.validateInput(answer, player);       
        } while (!isValidInput);
        return answer;
    }

    public askToPlayAgain(): boolean {
        let yes = readlineSync.keyInYN('Do you want to play again?\n');
        if (yes) {
            return true;
        }
        console.log('Ok, bye!\n');
        return false;
    }

    private congratsToWinner(): void {
        this.winner = this.predictor;
        console.log(`${this.winner.name} WIN!!\n`);
    }

    private validateInput(answer: string, player: Player): boolean {
        const isPredictor = this.predictor === player;
        const openClosedHands = ['OO', 'OC', 'CC', 'CO'];
        if (!(openClosedHands.includes(answer.substring(0, 2)))) {
            console.error('Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4).');
            return false;
        }
        if (!isPredictor && (answer.length > 2)) {
            console.error('Bad input: no prediction expected, you are not the predictor.');
            return false;   
        }
        if (isPredictor && !isValidPredictionInput(answer.substring(2))) {
            console.error('Bad input: prediction should be in the range of 0-4.');
            return false;
        }
        return true;
    }
}

function isValidPredictionInput (value: any): boolean {
    return (/^(\+)?([0-4])$/.test(value));
}