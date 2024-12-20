## The Open-Closed Game

### Rules of the game:

This game is played between two players.

One player will be the predictor.

To play the game, after a count of three, the players will need to simultaneously show their hands with each hand either open or closed, and the predictor needs to shout out how many hands they think will be open in total.

If the predictor is correct, they win; otherwise, the other player becomes the predictor and they go again. This continues until the game is won.

### The challenge:

You need to create a program to play this game against the computer. This can just be a simple console application.

You will always be the predictor first.

The “AI” player will just do things randomly.

For each round, the computer will expect player input in the following format if you are the predictor:

`OC2`

Or if you are not:

`CO`

That is, the first two characters will show how you will play your hands, O for open or C for closed. If you are the predictor, you also need to enter a third character which is your prediction for how many open hands in total.

The program should then reveal the “AI” player's input and indicate if the game was won, or move to the next round.

### Example of what gameplay could look like:

```
Welcome to the game!

You are the predictor, what is your input?

OO4

AI: CO

No winner.

AI is the predictor, what is your input?

CC

AI: OO0

No winner.

You are the predictor, what is your input?

CO3

AI: OO

The Open-Closed Game

Rules of the game:

This game is played between two players.

One player will be the predictor.

To play the game, after a count of three, the players will need to simultaneously show their hands with each hand either open or closed, and the predictor need to shout out how many hands they think will be open on total.

If the predictor is correct, they win, otherwise the other player becomes the predictor and they go again. This continues until the game is won.

The challenge:

You need to create a program to play this game against the computer. This can just be a simple console application.

You will always be the predictor first.

The “AI” player will just do things randomly.

For each round, the computer will expect player input in the following format if you are the predictor:

OC2

Or if you are not:

CO

That is, the first two characters will show how you will play your hands, O for open or C for closed. If you are the predictor, you also need to enter a third character which is your prediction for how many open hands in total.

The program should then reveal the “AI” players input and indicate if the game was won, or move to the next round.

Example of what game play could look like:

Welcome to the game!

You are the predictor, what is your input?

OO4

AI: CO

No winner.

AI is the predictor, what is your input?

CC

AI: OO0

No winner.

You are the predictor, what is your input?

CO3

AI: OO

You WIN!!

Do you want to play again?

N

Ok, bye!

Tips:

Remember to validate the input and give the user useful messages if their input is not valid.

Valid input should be either a C or O for the first two character and a number between 0 and 4 for the prediction.

For example, if the user enters “chicken” on their turn, you could display a message such as:

Bad input: correct input should be of the form CC3, where the first two letters indicate [O]pen or [C]losed state for each hand, followed by the prediction (0-4).

If the user enters “CC8” the error could be:

Bad input: prediction should be in the range of 0-4.

Or, if they are not the predictor:

Bad input: no prediction expected, you are not the predictor.
```


---
## Requirements

For development, you will only need Node.js and a node global package, NPM, installed in your environement.

### Node
    $ node --version
    v12.14.1

    $ npm --version
    6.14.1


## Install

    $ git clone git@github.com:doraeball22/Open-Closed_Game.git
    $ cd Open-Closed_Game
    $ npm install


## Running the project

    $ npm start

## Testing the project

    $ npm run test
