// Name: Houston Bennett
// Date: 11/29/2012
// Assignment: Deliverable 2
// Description: Kolbold Arena!


// Player Variables
var playerName = "Grok",
    playerHP = 100,
    playerStr = 15,
    arenaDays = 0
;
// Monster Variables
var mobName = ["Giant Rat", "Gnoll","Dire Bear","Dragon"],
    mobHP = [5,15,50,200],
    mobStr = [1,10,15,20]
    mobCount = mobName.length;
;
// String function  (String concatenation)
var getEnding = function (ending) {
    if ending = "sad"{
        console.log()

    }


};
// If fed Happy ending. + Grok + happy words.
// If fed Sad ending. + Grok + sad words.

// Procedure

var preBattle = function (equipped, rested) {

    if (mobCount > 0) {
        playerHP == 100;
        arenaDays ++;
        console.log("Another day, another victory. You have been here for: "+ arenaDays + " days.")
        console.log("You are rested and equipped for combat " + playerName + ".");
        console.log("Steel your nerves for you are about to enter the Arena!");
        console.log("");
    }
    else {
        console.log("You have defeated all the monsters in the Arena.");
        //stringFunc(happy)
    }

};

preBattle(true,true);

// Number function (While-loop)

// battle code. While Mob's HP > 0 kill kill kill
// Then goto boolean function for next battle or end.
var battleFunc = function (mobName, mobHP, mobStr, playerName, playerHP, playerStr) {

    while (mobHP > 1){

        console.log(playerName + " hits " + mobName + " for " + playerStr + " damage!");
        mobHP-=playerStr;

        if (mobHP > 1){
            console.log(mobName + " has only " + mobHP + "HP left!");
            console.log(mobName + " hits " + playerName + " for " + mobStr + " damage!");
            playerHP -= mobStr;
            if (playerHP > 1){
                console.log(playerName + " has only " + playerHP + "HP left!");
                console.log("Will " + playerName + " be able to handle much more?!");
                console.log("");
            }
            else{
                isItOver(true,mobCount);
            }
        }
        else {

            console.log(playerName + " has defeated the " + mobName + "!");

            isItOver(false,mobCount);
        };

    };


};



// Boolean function (Comparison)
var isItOver = function (grokDead,) {

    if ((grokDead == false) && (mobCount > 0))  {
          mobCount--
          preBattle(true,true);

    }
    else {
           console.log("You fought bravely, " + playerName +", but the arena was too much for you.");
           console.log("You have died, leaving " + mobCount + "monsters for the next guy.");
           stringFunc(sad);

    };

};
// Is Grok dead? Are the monsters all dead?
// If Grok is dead. Sad ending. Call String function.
// if Grok !dead next monster.
// If mob's all dead. Happy ending. Call String function.


// Array function  (For-loop)

// For each monster, must run battle function.
var nextMob = function () {
    for (var i = 0, j = mobCount; i < j; i++ ) {

           battleFunc(mobName[i],mobHP[i],mobStr[i],playerName,playerHP,playerStr);
    };



};

nextMob();








