// Houston Bennett
// SDI 1211
// Project 3
// Race Day!


//Global variables

var driver = {
// METHODS:

// Procedure
    "getStats": function(json){

        for( var i = 0; i < json.length; i++){

            var driver = json[i];
            console.log("");
            for (var key in driver.driver){
                console.log(key + ": " + driver.driver[key]);

            };

        }
    },
// Accessor
    "isReady": function(json,name){

        for ( var i = 0; i < json.length; i++){

            var driver = json[i];

            for (var key in driver.driver){
                var ready = key;
                if (key == true){

                   return ready;
                }
                else{

                    return ready;
                }


            }
        }


    },
    "setReady" : function(bool,index){

        cars[index].driver.isReady = bool;

    },
// Mutator & Function Method?
    "setUpgrades" : function(index,partsList){
        cars[index].engineMods = partsList;
        // String Return
        var changes = "Your upgrades have been changed!";
        return changes;
    },
// Function Method?
    "getUpgrades" : function(index){
        // Array Return
        var upgrades = cars[index].engineMods;
        return upgrades;

    }

};


var upgradeList = ["Exhuast","Suspension","Brakes","Window Tint"];
var driverIndex = 0;
var driverName = "Houston";

// Functions
    //Begin method:
var raceSetup = function(racers){

    console.log("Ladies and gentlemen, we're here for a race. Let's do it!")
    console.log("Our racers today are: ")
    for (var i = 0; i < racers.length;i++){

        var car = racers[i];

        console.log(car.driver["name"] + " driving a " + car.carModel);

    };

};

/*var getRacerStats = function (json){
    var driverStats = driver.getStats(json);
    console.log("Before getRacerStats return.")
    return driverStats;

};
*/
var startRace = function(){
    console.log("Before we start lets get a closer look at our drivers!");
    driver.getStats(cars);
    console.log("");
    console.log("We're starting the race!");


};

var driverReady = function (){

    var ready = driver.isReady(cars,driverName);

    if (ready == true){
        console.log(driverName+" is ready!");
    }
    else{
        console.log(driverName+" is NOT ready!");
    }
};






raceSetup(cars);

startRace();
driverReady();

console.log(driver.setUpgrades(driverIndex,upgradeList));
console.log("The changes we found are as follows: ");
console.log(driver.getUpgrades(driverIndex));
console.log("You'll have to re-certify in order to qualify for this race.")
console.log("");
