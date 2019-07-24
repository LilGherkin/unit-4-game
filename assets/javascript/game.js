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

var Game = {
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


//Resets the game. Assigns a new target score, and sets user score back to 0. Assigns a value to our gems. 
function ResetGame() {
    //Change Target Score. Sets it between 30 & 120. 
    Game.TargetScore = Math.floor(Math.random() * 91) + 30;
    //Reset User score to 0. 
    Game.UserScore = 0;
    //Assign gem values. Create a blank holder which will hold a temp value before passing it to the object property. 
    var GemValueHolder;
    for (var j in Game.Gems) {
        GemValueHolder = Math.floor(Math.random() * 11) + 1;
        j = GemValueHolder;
    };
    //Call display function to update to user. 
    Display()
}

//Function to update display relevant information to user.
function Display() {
    //Displays game's target score
    $("#Goal").text(Game.TargetScore);
    //Displays game's user score
    $("#Score").text(Game.UserScore);
    //DIsplays the win counter.
    $("#Wins").text(Game.Wins);
    //DIsplays the loss counter.
    $("#Losses").(Game.Losses);
}



//Function to check for win condition

function CheckWin() {
    if (Game.UserScore = Game.TargetScore) {
        Wins++;
        GameOver = true;
    }
};

//Function to check for loss condition. 


/* Attempt at jQuery version of each function to assign value to Game.Gems, circle back to latter.
$.each( $(Game.Gems), function() {    
    i = 
});
*/
//Function get a random value to pass into ResetGame.


$(".Gem").click(function() {
    if (Game.GameOn) {
        ResetGame();
        Game.GameOn = false;
    } else {
        

        }
        console.log(Game.Gems);
    }
});

