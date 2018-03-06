# Rock Paper Scissors

## How to run

* Download or clone this repository

* In your terminal, install dependencies with `npm install` or `yarn install`

* Start the app with `npm start` or `yarn start` - it runs on port 8000

* Run tests with `npm test` or `yarn test`

## My approach

I set out to make a simple rock-paper-scissors app using React. The main app renders 3 components which make up the game - the area displaying picks and winners, the buttons, and the scoreboard.

The main logic is housed in the app component, with state and functions passed down into the smaller components.

I have written some tests for the game using mocha, chai and enzyme.

It is mobile responsive, though I would like to improve the styling given more time, possibly including some tasteful animation.

Furthermore, I would like to expand the scope of the testing of this game by testing that the play/checkWin functions are operating as expected.
