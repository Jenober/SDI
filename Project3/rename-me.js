// Houston Bennett
// SDI 1211
// Project 3



//Global variables

var driver = {
    "getStats": function(json){

        for( var i = 0; i < json.length; i++){

            var driver = json[i];
            for (var key in driver.driver){
                console.log(key);
                console.log(driver.driver[key]);

            };

        }
    },

    "isReady": function(json,name){

        for ( var i = 0; i < json.length; i++){

            var driver = json[i];

            for (var key in driver.driver){
                if (key = true){
                   return true;
                }
                else{
                    return false;
                }


            }
        }


    }

};

//var driverStats = driver.getStats(cars);

var driverReady = driver.isReady(objCar,"Houston");

console.log(driverReady);

var getRacer = function (json){


};



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


var startRace = function(){


};

raceSetup(cars);
startRace()