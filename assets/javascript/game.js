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
$(document).ready(function() {

var NumberCheck = 0;
NumberCheck = Math.floor(Math.random() * 91) + 30;
console.log(NumberCheck)

var Game = {
    TargetScore : 0,
    UserScore : 0,
    GameOver : false, 
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
//Document Ready Function


//Resets the game. Assigns a new target score, and sets user score back to 0. Assigns a value to our gems. 

function ResetGame() {
    
    //Change Target Score. Sets it between 30 & 120. 
    
    Game.TargetScore = Math.floor(Math.random() * 91) + 30;
    
    //Reset User score to 0. 
    
    Game.UserScore = 0;
    
    //Assign gem values. Create a blank holder which will hold a temp value before passing it to the object property. 
    
    for (var j in Game.Gems) {
        j = Math.floor(Math.random() * 11) + 1;
    };

    //Assigns the gem values to our gem buttons by their ID. Taken from our jQuery calculator lesson.   
    $("#Ruby").val(Game.Gems.Ruby);
    $("#Sapphire").val(Game.Gems.Sapphire);
    $("#Diamond").val(Game.Gems.Diamond);
    $("#Emerald").val(Game.Gems.Emerald);
    $("#Topaz").val(Game.Gems.Topaz);

    //Call display function to update to user. 
    Display()
}

//Function to update display relevant information to user.
function Display() {
    //Displays game's target score
    $("#Goal").text(Game.TargetScore + "   Target Score");
    //Displays game's user score
    $("#Score").text("Your Score   " + Game.UserScore);
    //Displays the win counter.
    $("#Wins").text("Wins: " + Game.Wins);
    //Displays the loss counter.
    $("#Losses").text("Losses: " + Game.Losses);
};



//Function to check for win condition

function CheckWin() {
    if (Game.UserScore === Game.TargetScore) {
        Wins++;
        GameOver = true;
    }
};

//Function to check for loss condition

function CheckLoss() {
    if(Game.UserScore > Game.TargetScore) {
        Losses++;
        GameOver = true;
    }
}



/* Attempt at jQuery version of each function to assign value to Game.Gems, circle back to latter.
$.each( $(Game.Gems), function() {    
    i = 
});
*/
//Function get a random value to pass into ResetGame.

//Function that starts the game when a button with class gem is clicked
$(".Gem").click(function() {
    if (Game.GameOver) {
        ResetGame();
        Game.GameOver = false;
    } else {
        //Takes the value of the button clicked on and adds it to the UserScore. 
        Game.UserScore += $(".Gem").val();
        //Checks to see if we've won after pressing the button.
        CheckWin();
        //Checks to see if we've lost after pressing the button.
        CheckLoss();
        //Updates visible data after pressing a button. 
        Display();
        //Makes sure that the gem value is actually getting added in.
        console.log (Game.Gems);
    }
});

});
