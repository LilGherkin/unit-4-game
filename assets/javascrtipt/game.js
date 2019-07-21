/*
Things to do:
Things to keep track of:
    Target Score (Visible)
    Gem assigned values (Hidden)
    Wins & Losses (Visible)
    GameOver (Hidden, but self-evident)
Create a function that resets the game and does the following:
    Generates a new target score to hit.
    Assigns a new value to each gem. 
    Overwrites previous target score.
    Resets UserScore to 0. 
Create a function that checks for the win state after a button is clicked. 
Create a function that checks for a loss state after a button is clicked and a score threshold is exceeded.

Use JQuery where able 
*/

var game = {
    TargetScore : 0,
    UserScore : 0,
    GameOn : false, 
    Gems : {
        Ruby : 0,
        Sapphire: 0,
        Diamond: 0,
        Emerald: 0,
        Topaz: 0,
    },
    Wins : 0,
    Losses : 0,
}

function ResetGame() {
    game.TargetScore = Math.floor(Math.random() * 120);
}
