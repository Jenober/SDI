
/*
 Given a string that is a list of things separated by a given string,
 as well as another string separator, return a string with the first separator
 changed to the second: "a,b,c" + "," + "/" → "a/b/c".
 */
var swapSeparator = function(string){
    var str = string;
    alert ("The string we are starting with is: " + str);
    var separator = prompt("Please enter the separator you're looking for: ");
    var newseparator = prompt("Please enter the separator that you'd like to replace your previous entry with: ");


    console.log("You started with: " + str);
    var newstr = str.replace(separator, newseparator, "gi");
    console.log("Now you have: " + newstr);

};

/*
 Does a string follow a 123-456-7890 pattern like a phone number?
 */
var isPhoneNum = function(phonenumber){
    var phoneNum = phonenumber;

    if(phoneNum.charAt(3) == "-" && phoneNum.charAt(7)== "-"){
        alert("You have entered the phone number properly!")
            
    }else{

        alert("You have entered the phone number improperly! Try again!")
    }


};