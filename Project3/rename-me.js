// Houston Bennett
// SDI 1211
// Project 3
// Race Day!


//Global variables

var driver = {
    "getStats": function(json){

        for( var i = 0; i < json.length; i++){

            var driver = json[i];
            console.log("");
            for (var key in driver.driver){
                console.log(key + ": " + driver.driver[key]);

            };

        }
    },

    "isReady": function(json,name){

        for ( var i = 0; i < json.length; i++){

            var driver = json[i];

            for (var key in driver.driver){
                if (key == true){
                   var ready = "The driver is READY!";
                   return ready;
                }
                else{
                    ready = "The driver is NOT READY!"
                    return ready;
                }


            }
        }


    },

    "setUpgrades" : function(partsList){
        cars[0].engineMods = partsList;
        console.log("Your upgrades have been changed!")

    }

};

var driverReady = driver.isReady(cars,"Houston");
var upgradeList = ["Exhuast","Suspension","Brakes","Window Tint"];

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
    console.log("We're starting the race!");


};







raceSetup(cars);
driver.getStats(cars);
startRace();
console.log(driverReady);
console.log("BEFORE ENGINE CHANGE");
console.log(cars[0].engineMods);
driver.setUpgrades(upgradeList);
console.log("AFTER ENGINE CHANGE");
console.log(cars[0].engineMods);