// Name: Houston Bennett
// Date: 11/29/2012
// Assignment: Deliverable 2
// Description: Kolbold Arena!


// Player Variables
var playerName = "Grok";
var playerHP = 100;
var playerStr = 15;
// Monster Variables
var mobName = ["Giant Rat", "Gnoll","Dire Bear"];
var mobHP = [5,15,50]
var mobStr = [1,10,15]

// Procedure
var preBattle = function (equipped, rested) {

    if (equipped = true && rested = true) {
        playerHP == 100;
        console.log("You are rested and equipped for combat " + playerName + ".");
        console.log("Steel your nerves for you are about to enter the Arena!");
    }
    else {
        console.log("You are too tired and ill-equipped to fight right now, "+ playerName + ".")
    }


};


// Number function (While-loop)

// battle code. While Mob's HP > 0 kill kill kill
// Then goto boolean function for next battle or end.

var battleFunc (mobName, mobHP, mobStr, playerName, playerHP, playerStr) {

    while (mobHP > 1){
        console.log(playerName + " hits " + mobName + " for " + playerStr + " damage!");
        mobHP-=playerStr;
        console.log(mobName + " has only " + mobHP + " left!");
        console.log(mobName + " hits " + playerName + " for " + mobStr + " damage!");
        playerHP -= mobstr;

    };


};

battleFunc(mobName[0],mobHP[0],mobStr[0])
// Boolean function (Comparison)

// Is Grok dead? Are the monsters all dead?
// If Grok is dead. Sad ending. Call String function.
// if Grok !dead next monster.
// If mob's all dead. Happy ending. Call String function.


// Array function  (For-loop)

// For each monster, must run battle function.


// String function  (String concatenation)

// If fed Happy ending. + Grok + happy words.
// If fed Sad ending. + Grok + sad words.

//Procedure



// Boolean Function (Comparison)

//Check if player is still alive.
// Yes, check if more monsters.
//      Yes, next battle, call array function.
// No more mobs, call string function with happy ending.
// If player is dead, call string function with sad ending.



// number Function (While-loop)

// Battle code. Fed each monster. While time remains, mob and player attack each other.
// After each round, call boolean function.



// String Function (Concatenation)
// If happy ending, playerName +  "Happy ending"
//  else, playerName + "Sad ending"


// Array Function (For-loop)

// For each monster in the array, we call the number function to run
// through the battle code.





