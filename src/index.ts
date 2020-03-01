import { GameController } from './GameController';

let doYouPlayAgain = true;

do {
    const gameCtrl = new GameController();
    doYouPlayAgain = gameCtrl.askToPlayAgain();
} while (doYouPlayAgain);
