import { GameController } from './GameController';

let areYouPlayAgain = true;

do {
    const gameCtrl = new GameController();
    areYouPlayAgain = gameCtrl.askToPlayAgain();
} while (areYouPlayAgain);
